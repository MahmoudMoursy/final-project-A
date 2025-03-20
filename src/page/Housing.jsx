import React from 'react'
import NavBar from '../Components/NavBar'
import A222 from '../assets/housing/A222.webp'
import A1111 from '../assets/housing/A1111.webp'
import A333 from '../assets/housing/A333.webp'
import A444 from '../assets/housing/A444.webp'
import AA from '../assets/housing/AA.webp'
import Footer from '../Components/Footer'
import { useState, useEffect } from "react";
import db from "../firebaseconfig";
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";

function Housing() {
  const [housingData, setHousingData] = useState({
    address: "", description: "", numbed: "", numteu: "", phone: "", whats: "", price: "",
  });
  const [housingList, setHousingList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    rooms: "",
    beds: "",
    location: "",
    price: "",
  });

  const [bookingData, setBookingData] = useState({
    userId: "", // To be filled with actual user ID
    houseId: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    status: "pending",
    createdAt: null
  });

  const [activeFilters, setActiveFilters] = useState({
    priceRange: "",
    rooms: "",
    beds: "",
    location: "",
    bathrooms: ""
  });

  const handleChange = (e) => {
    setHousingData({ ...housingData, [e.target.name]: e.target.value });
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookingWithTimestamp = {
        ...bookingData,
        createdAt: Timestamp.now()
      };
      await addDoc(collection(db, "bookings"), bookingWithTimestamp);
      alert("تم إرسال طلب الحجز بنجاح!");
      // Close modal and reset form
      document.getElementById('bookingModal').classList.remove('show');
      setBookingData({
        userId: "",
        houseId: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
        status: "pending",
        createdAt: null
      });
    } catch (error) {
      console.error("خطأ في الحجز:", error);
      alert("حدث خطأ أثناء الحجز");
    }
  };

  // Filter housing list based on search and filters
  const filteredHousingList = housingList.filter(house => {
    // Search term filtering
    const matchesSearch = searchTerm ?
      house.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      house.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    // Active filters
    const matchesFilters = Object.entries(activeFilters).every(([key, value]) => {
      if (!value) return true;
      switch (key) {
        case 'priceRange':
          const [min, max] = value.split('-');
          return house.price >= Number(min) && house.price <= Number(max);
        case 'location':
          return house.address.includes(value);
        case 'rooms':
          return house.numbed === value;
        case 'beds':
          return house.numbed === value;
        case 'bathrooms':
          return house.numteu === value;
        default:
          return true;
      }
    });

    return matchesSearch && matchesFilters;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "housing"), housingData);
      alert("تمت إضافة السكن بنجاح!");
      setHousingData({
        address: "",
        description: "",
        numbed: "",
        numteu: "",
        phone: "",
        whats: "",
        price: "",
      });
    } catch (error) {
      console.error("خطأ أثناء الحفظ: ", error);
    }
  };

  useEffect(() => {
    const fetchHousing = async () => {
      const querySnapshot = await getDocs(collection(db, "housing"));
      const houses = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setHousingList(houses);
    };

    fetchHousing();
  }, []);

  return (
    <>
      <NavBar />
      <div className="search-container bg-white shadow-sm py-4" dir="rtl">
        <div className="container">
          <div className="row g-3 align-items-center justify-content-end">
            <div className="col-md-4">
              <div className="d-flex gap-2">
                <input
                  type="text"
                  className="form-control form-control-lg text-end"
                  placeholder="ابحث عن موقع..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <button className="btn btn-primary search-button">
                  بحث <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="col-md-2">
              <select
                className="form-select form-select-lg text-end"
                value={activeFilters.rooms}
                onChange={(e) => setActiveFilters({ ...activeFilters, rooms: e.target.value })}
              >
                <option value="">عدد الغرف</option>
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <select
                className="form-select form-select-lg text-end"
                value={activeFilters.beds}
                onChange={(e) => setActiveFilters({ ...activeFilters, beds: e.target.value })}
              >
                <option value="">عدد السُرُر</option>
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <select
                className="form-select form-select-lg text-end"
                value={activeFilters.location}
                onChange={(e) => setActiveFilters({ ...activeFilters, location: e.target.value })}
              >
                <option value="">الموقع</option>
                <option value="صحاري">صحاري</option>
                <option value="البركه">البركه</option>
                <option value="العقاد">العقاد</option>
                <option value="التأمين">التأمين</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-4" dir="rtl">
        <div className="row">
          <div className="col-md-3 order-md-1">
            <div className="card shadow-sm">
              <div className="card-body text-end">
                <h5 className="card-title mb-4">تصفية النتائج</h5>
                <div className="mb-4">
                  <label className="form-label">نطاق السعر</label>
                  <select
                    className="form-select text-end"
                    value={activeFilters.priceRange}
                    onChange={(e) => setActiveFilters({ ...activeFilters, priceRange: e.target.value })}
                  >
                    <option value="">الكل</option>
                    <option value="0-1000">أقل من 1000</option>
                    <option value="1000-2000">1000 - 2000</option>
                    <option value="2000-3000">2000 - 3000</option>
                    <option value="3000-100000">أكثر من 3000</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label">عدد الغرف</label>
                  <select
                    className="form-select text-end"
                    value={activeFilters.rooms}
                    onChange={(e) => setActiveFilters({ ...activeFilters, rooms: e.target.value })}
                  >
                    <option value="">الكل</option>
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label">عدد السُرُر</label>
                  <select
                    className="form-select text-end"
                    value={activeFilters.beds}
                    onChange={(e) => setActiveFilters({ ...activeFilters, beds: e.target.value })}
                  >
                    <option value="">الكل</option>
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label">الموقع</label>
                  <select
                    className="form-select text-end"
                    value={activeFilters.location}
                    onChange={(e) => setActiveFilters({ ...activeFilters, location: e.target.value })}
                  >
                    <option value="">الكل</option>
                    <option value="صحاري">صحاري</option>
                    <option value="البركه">البركه</option>
                    <option value="العقاد">العقاد</option>
                    <option value="التأمين">التأمين</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label">عدد الحمامات</label>
                  <select
                    className="form-select text-end"
                    value={activeFilters.bathrooms}
                    onChange={(e) => setActiveFilters({ ...activeFilters, bathrooms: e.target.value })}
                  >
                    <option value="">الكل</option>
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9 order-md-2">
            <div className="row g-4">
              {filteredHousingList.map((house, index) => (
                <div key={house.id} className="col-md-6">
                  <div className="card h-100 shadow-sm hover-shadow">
                    <div id={`cardCarousel-${index}`} className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src={A222} className="d-block w-100 h-100 rounded-start" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src={A1111} className="d-block w-100 rounded-start" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src={A333} className="d-block w-100 rounded-start" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src={A444} className="d-block w-100 rounded-start" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src={AA} className="d-block w-100 rounded-start" alt="..." />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#cardCarousel-${index}`}
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#cardCarousel-${index}`}
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card-body text-end">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <span className="badge bg-primary">{house.address}</span>
                        <h5 className="card-title mb-0">{house.price} ج.م/شهر</h5>
                      </div>
                      <p className="card-text">{house.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="contact-buttons">
                          <a href={`tel:${house.phone}`} className="btn btn-outline-primary me-2">
                            <i className="fa-solid fa-phone-volume"></i> مكالمه
                          </a>
                          <a href={`https://wa.me/${house.whats}`} className="btn btn-outline-success">
                            <i className="fa-brands fa-whatsapp"></i> واتساب
                          </a>
                        </div>
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            setBookingData({ ...bookingData, houseId: house.id });
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#bookingModal"
                        >
                          احجز الآن <i className="fas fa-bookmark"></i>
                        </button>
                      </div>
                      <div className="features mt-3">
                        <span className="ms-3"><i className="fas fa-bed"></i> {house.numbed}</span>
                        <span><i className="fas fa-bath"></i> {house.numteu}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="bookingModal" tabIndex="-1" dir="rtl">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close ms-0 me-auto" data-bs-dismiss="modal"></button>
              <h5 className="modal-title">حجز السكن</h5>
            </div>
            <form onSubmit={handleBookingSubmit}>
              <div className="modal-body text-end">
                <div className="mb-3">
                  <label className="form-label">تاريخ الوصول</label>
                  <input
                    type="date"
                    className="form-control text-end"
                    value={bookingData.checkIn}
                    onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">تاريخ المغادرة</label>
                  <input
                    type="date"
                    className="form-control text-end"
                    value={bookingData.checkOut}
                    onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">عدد الضيوف</label>
                  <input
                    type="number"
                    className="form-control text-end"
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                    min="1"
                    required
                  />
                </div>
              </div>
              <div className="modal-footer justify-content-start">
                <button type="submit" className="btn btn-outline-primary">
                  تأكيد الحجز <i className="fas fa-check"></i>
                </button>
                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                  إلغاء <i className="fas fa-times"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Housing

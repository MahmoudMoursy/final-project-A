import React, { useState, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import db from "../firebaseconfig";
import { addDoc, collection, doc, getDoc, getDocs, setDoc, Timestamp } from "firebase/firestore";
import {UploadPhotos} from '../UploadPhotos' 
import { useNavigate } from 'react-router-dom'
import { FaBed, FaBath, FaMapMarkerAlt, FaSearch, FaPhone, FaWhatsapp, FaComments, FaBookmark, FaPlus, FaCheck, FaTimes } from 'react-icons/fa'
import './Housing.css'

function Housing() {
  const userData = JSON.parse(localStorage.getItem("currentUser"));
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [images, setImages] = useState([]);
  const nav = useNavigate();

 
  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };
  const removeImage = (index) => {
    setImages((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const [housingData, setHousingData] = useState({
    address: "", description: "", numbed: "", numteu: "", phone: "", whats: "", price: "",status:"pending",Id:user.UserId,username:user.username
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
    userId: "", 
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
      document.getElementById('bookingModal').classList.remove('show');
      setBookingData({
        userId: "",
        houseId: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
        createdAt: null
      });
    } catch (error) {
      console.error("خطأ في الحجز:", error);
      alert("حدث خطأ أثناء الحجز");
    }
  };

  const filteredHousingList = housingList.filter(house => {
    const matchesSearch = searchTerm ?
      house.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      house.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

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
  
    const uploadedUrls = await UploadPhotos(images); // رفع الصور
  
    try {
      await addDoc(collection(db, "housing"), {
        ...housingData,
        Images: uploadedUrls, // تخزين روابط الصور في الفايربيز
        Id: user.UserId,
        username: user.username
      });
      alert("طلبك قيد المراجعة");
  
      // إعادة تعيين البيانات
      setHousingData({
        address: "",
        description: "",
        numbed: "",
        numteu: "",
        phone: "",
        whats: "",
        price: "",
        Images: [],
        status:"pending",
        Id: user.UserId,
        username: user.username
      });
      setImages([]);
    } catch (error) {
      console.error("خطأ أثناء الحفظ: ", error);
      alert("حدث خطأ أثناء الحفظ");
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


  function message(PostUserId){
    
    const messageId = userData.UserId+'-'+ PostUserId;    //first sender - second receiver
    const userRef = doc(db, "messages", messageId);
    save();
    // async function save() {
    //     const userData = {
    //         sender:[], // currentUser
    //         receiver: [], // receiverUser
    //     };
    //     await setDoc(userRef, userData);
    //     localStorage.setItem("messageId", JSON.stringify(messageId));
    //      nav('/Message');
    // }
    async function save() {
      const docSnap = await getDoc(userRef);
  
      if (!docSnap.exists()) {
        const userData = {
          sender: [],      // رسائل المرسل
          receiver: []     // رسائل المستلم
        };
        await setDoc(userRef, userData);
      }
  
    localStorage.setItem("messageId", JSON.stringify(messageId));
      nav('/YourMessage');
    }



  }
  return (
    <>
      <NavBar />
      <div className="housing-page-container">
        <div className="container">
          <div className="page-header">
            
          </div>
          
          <div className="fullwidth-search-container" dir="rtl">
            <div className="search-hero">
              <div className="search-hero-content">
                <h2 className="search-hero-title">ابحث عن سكنك المثالي</h2>
                <p className="search-hero-subtitle">استكشف مجموعة متنوعة من المساكن المتاحة في المنطقة</p>
                
                <div className="main-search-box">
                  <div className="search-input-container">
                    <FaSearch className="search-icon" />
                    <input 
                      type="text" 
                      className="form-control main-search-input text-end" 
                      placeholder="ابحث عن موقع، وصف، أو سعر..."
                      value={searchTerm} 
                      onChange={handleSearch} 
                    />
                    <button className="btn main-search-button" onClick={() => handleSearch({ target: { value: searchTerm } })}>
                      بحث
                    </button>
                  </div>
                  
                  <div className="search-tags-container">
                    <div className="search-tags">
                      <span className="search-tag" onClick={() => setSearchTerm("صحاري")}>صحاري</span>
                      <span className="search-tag" onClick={() => setSearchTerm("شقة")}>شقة</span>
                      <span className="search-tag" onClick={() => setSearchTerm("فاخر")}>فاخر</span>
                      <span className="search-tag" onClick={() => setSearchTerm("قريب من الجامعة")}>قريب من الجامعة</span>
                      <span className="search-tag" onClick={() => setSearchTerm("مفروش")}>مفروش</span>
                      <span className="search-tag" onClick={() => setSearchTerm("حديث")}>حديث</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="quick-filters-bar">
              <div className="container">
                <div className="quick-filters-wrapper">
                  <div className="quick-filter-group">
                    <label className="quick-filter-label">عدد الغرف</label>
                    <div className="quick-filter-buttons">
                      <button 
                        className={`quick-filter-btn ${activeFilters.rooms === "" ? "active" : ""}`}
                        onClick={() => setActiveFilters({ ...activeFilters, rooms: "" })}
                      >الكل</button>
                      {[1, 2, 3, 4].map(num => (
                        <button 
                          key={num} 
                          className={`quick-filter-btn ${activeFilters.rooms === num.toString() ? "active" : ""}`}
                          onClick={() => setActiveFilters({ ...activeFilters, rooms: num.toString() })}
                        >{num}</button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="quick-filter-group">
                    <label className="quick-filter-label">الموقع</label>
                    <div className="quick-filter-buttons location-buttons">
                      <button 
                        className={`quick-filter-btn location-btn ${activeFilters.location === "" ? "active" : ""}`}
                        onClick={() => setActiveFilters({ ...activeFilters, location: "" })}
                      >الكل</button>
                      {["صحاري", "البركه", "العقاد", "التأمين"].map(loc => (
                        <button 
                          key={loc} 
                          className={`quick-filter-btn location-btn ${activeFilters.location === loc ? "active" : ""}`}
                          onClick={() => setActiveFilters({ ...activeFilters, location: loc })}
                        >{loc}</button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="quick-filter-group">
                    <label className="quick-filter-label">السعر</label>
                    <select
                      className="form-select quick-filter-select text-end"
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
                  
                  <div className="quick-filter-group">
                    <button 
                      className="btn advanced-filters-btn"
                      onClick={() => document.getElementById('filtersModal').classList.add('show')}
                      data-bs-toggle="modal" 
                      data-bs-target="#filtersModal"
                    >
                      <i className="fas fa-sliders-h me-2"></i> مزيد من الخيارات
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-4" dir="rtl">
            <div className="col-md-3 order-md-1 d-none d-md-block">
              <div className="filter-sidebar">
                <h5>تصفية النتائج</h5>
                <div className="mb-3">
                  <label className="form-label">نطاق السعر</label>
                  <div className="price-range-slider">
                    <div className="price-labels d-flex justify-content-between">
                      <span>0</span>
                      <span>1000</span>
                      <span>2000</span>
                      <span>3000+</span>
                    </div>
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
                </div>
                
                <div className="filter-section">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="filter-count">{activeFilters.rooms ? activeFilters.rooms : "الكل"}</div>
                    <label className="form-label mb-0">عدد الغرف</label>
                  </div>
                  <div className="room-buttons">
                    <button 
                      className={`room-filter-btn ${activeFilters.rooms === "" ? "active" : ""}`}
                      onClick={() => setActiveFilters({ ...activeFilters, rooms: "" })}
                    >الكل</button>
                    {[1, 2, 3, 4].map(num => (
                      <button 
                        key={num} 
                        className={`room-filter-btn ${activeFilters.rooms === num.toString() ? "active" : ""}`}
                        onClick={() => setActiveFilters({ ...activeFilters, rooms: num.toString() })}
                      >{num}</button>
                    ))}
                  </div>
                </div>
                
                <div className="filter-section">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="filter-count">{activeFilters.beds ? activeFilters.beds : "الكل"}</div>
                    <label className="form-label mb-0">عدد السُرُر</label>
                  </div>
                  <div className="room-buttons">
                    <button 
                      className={`room-filter-btn ${activeFilters.beds === "" ? "active" : ""}`}
                      onClick={() => setActiveFilters({ ...activeFilters, beds: "" })}
                    >الكل</button>
                    {[1, 2, 3, 4].map(num => (
                      <button 
                        key={num} 
                        className={`room-filter-btn ${activeFilters.beds === num.toString() ? "active" : ""}`}
                        onClick={() => setActiveFilters({ ...activeFilters, beds: num.toString() })}
                      >{num}</button>
                    ))}
                  </div>
                </div>
                
                <div className="filter-section">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="filter-count">{activeFilters.bathrooms ? activeFilters.bathrooms : "الكل"}</div>
                    <label className="form-label mb-0">عدد الحمامات</label>
                  </div>
                  <div className="room-buttons">
                    <button 
                      className={`room-filter-btn ${activeFilters.bathrooms === "" ? "active" : ""}`}
                      onClick={() => setActiveFilters({ ...activeFilters, bathrooms: "" })}
                    >الكل</button>
                    {[1, 2, 3, 4].map(num => (
                      <button 
                        key={num} 
                        className={`room-filter-btn ${activeFilters.bathrooms === num.toString() ? "active" : ""}`}
                        onClick={() => setActiveFilters({ ...activeFilters, bathrooms: num.toString() })}
                      >{num}</button>
                    ))}
                  </div>
                </div>
                
                <div className="filter-section">
                  <label className="form-label">الموقع</label>
                  <div className="location-buttons">
                    <button 
                      className={`location-btn ${activeFilters.location === "" ? "active" : ""}`}
                      onClick={() => setActiveFilters({ ...activeFilters, location: "" })}
                    >الكل</button>
                    {["صحاري", "البركه", "العقاد", "التأمين"].map(loc => (
                      <button 
                        key={loc} 
                        className={`location-btn ${activeFilters.location === loc ? "active" : ""}`}
                        onClick={() => setActiveFilters({ ...activeFilters, location: loc })}
                      >{loc}</button>
                    ))}
                  </div>
                </div>
                
                {Object.values(activeFilters).some(val => val !== "") && (
                  <button 
                    className="btn btn-outline-light w-100 mt-3"
                    onClick={() => setActiveFilters({
                      priceRange: "",
                      rooms: "",
                      beds: "",
                      location: "",
                      bathrooms: ""
                    })}
                  >
                    إعادة ضبط الفلاتر
                  </button>
                )}
              </div>
            </div>

            <div className="col-md-9 order-md-2">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-md-none">
                <button className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#filtersModal">
                  <i className="fas fa-filter me-2"></i> الفلاتر ({Object.values(activeFilters).filter(val => val !== "").length})
                </button>
              </div>
              
              <div className="results-count">
                {filteredHousingList.length} نتيجة
              </div>
              
              {userData?.status === "publisher" && (
                <button type="button" className="btn add-housing-btn" data-bs-toggle="modal" data-bs-target="#addHousingModal">
                  <FaPlus className="me-2" /> إضافة سكن جديد
                </button>
              )}
            </div>
            
            <div className="row g-4">
              {filteredHousingList.length > 0 ? (
                filteredHousingList.map((house, index) => (
                  (house.status === 'accepted' && (
                    <div key={house.id} className="col-lg-4 col-md-6 mb-4">
                      <div className="housing-card">
                        <div id={`cardCarousel-${index}`} className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner">
                            {house.Images.map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`}
                              > 
                                <img
                                  src={image}
                                  className="d-block w-100"
                                  alt={`صورة ${imgIndex + 1}`}
                                />
                              </div>
                            ))}
                          </div>

                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target={`#cardCarousel-${index}`}
                            data-bs-slide="prev"
                          >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">السابق</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target={`#cardCarousel-${index}`}
                            data-bs-slide="next"
                          >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">التالي</span>
                          </button>
                        </div>
                        <div className="card-body text-end">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <span className="badge bg-primary">{house.address}</span>
                            <h5 className="card-title mb-0">{house.price} ج.م/شهر</h5>
                          </div>

                          <div className="publisher mb-2">
                            <FaMapMarkerAlt className="me-1" /> الناشر: {house.username}
                          </div>

                          <p className="card-text">{house.description}</p>
                          
                          <div className="features">
                            <span><FaBed className="me-1" /> {house.numbed} غرف</span>
                            <span><FaBath className="me-1" /> {house.numteu} حمام</span>
                          </div>
                          
                          <div className="contact-buttons">
                            <a href={`tel:${house.phone}`} className="btn btn-outline-primary">
                              <FaPhone className="me-1" /> اتصال
                            </a>
                            <a href={`https://wa.me/${house.whats}`} className="btn btn-outline-success">
                              <FaWhatsapp className="me-1" /> واتساب
                            </a>
                            <a onClick={() => message(house.Id)} className="btn btn-outline-dark">
                              <FaComments className="me-1" /> مراسلة
                            </a>
                          </div>
                          
                          <button
                            className="btn btn-warning w-100 mt-3"
                            onClick={() => {
                              setBookingData({ ...bookingData, houseId: house.id });
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#bookingModal"
                          >
                            احجز الآن <FaBookmark className="me-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ))
              ) : (
                <div className="col-12">
                  <div className="no-results">
                    <i className="fas fa-home"></i>
                    <h3>لا توجد نتائج</h3>
                    <p>لم يتم العثور على مساكن تطابق معايير البحث الخاصة بك</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade custom-modal" id="bookingModal" tabIndex="-1" dir="rtl">
        <div className="modal-dialog modal-dialog-centered">
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
                <button type="submit" className="btn btn-primary">
                  <FaCheck className="me-2" /> تأكيد الحجز
                </button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  <FaTimes className="me-2" /> إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        className="modal fade custom-modal"
        id="addHousingModal"
        tabIndex={-1}
        aria-labelledby="addHousingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addHousingModalLabel">
                إضافة سكن جديد
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="إغلاق"
              />
            </div>
            <div className="modal-body" >
              <div className="mb-4">
                <label className="form-label fw-bold">صور السكن</label>
                <div className="file-upload-container">
                  <label className="file-upload-btn">
                    <FaPlus className="me-2" /> اختر الصور
                    <input 
                      type="file" 
                      className="file-upload-input" 
                      name="files" 
                      multiple 
                      onChange={handleFilesChange} 
                      value={housingData.Images}
                    />
                  </label>
                </div>
              </div>
              
              {images.length > 0 && (
                <div className="image-preview-container">
                  {images.map((img, index) => (
                    <div key={index} className="image-wrapper">
                      <img src={img.preview} alt={`preview-${index}`} />
                      <button type="button" className="remove-btn" onClick={() => removeImage(index)}>×</button>
                    </div>
                  ))}
                </div>
              )}
                
                <div className="mb-3">
                  <label className="form-label">السعر (ج.م/شهر)</label>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    placeholder="أدخل السعر الشهري"
                    value={housingData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">العنوان</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="أدخل عنوان السكن"
                    value={housingData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">الوصف</label>
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="أدخل وصفًا تفصيليًا للسكن"
                    value={housingData.description}
                    onChange={handleChange}
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">عدد الغرف</label>
                    <input
                      type="number"
                      className="form-control"
                      name="numbed"
                      placeholder="عدد الغرف"
                      value={housingData.numbed}
                      onChange={handleChange}
                      min="1"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">عدد الحمامات</label>
                    <input
                      type="number"
                      className="form-control"
                      name="numteu"
                      placeholder="عدد الحمامات"
                      value={housingData.numteu}
                      onChange={handleChange}
                      min="1"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">رقم الواتساب</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaWhatsapp /></span>
                      <input
                        type="text"
                        className="form-control"
                        name="whats"
                        placeholder="رقم الواتساب"
                        value={housingData.whats}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">رقم الهاتف</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaPhone /></span>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="رقم الهاتف"
                        value={housingData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    <FaTimes className="me-1" /> إلغاء
                  </button>
                  <button onClick={handleSubmit} className="btn btn-primary">
                    <FaCheck className="me-1" /> حفظ السكن
                  </button>
                </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* مودال الفلاتر للأجهزة المحمولة */}
      <div className="modal fade" id="filtersModal" tabIndex="-1" aria-labelledby="filtersModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen-md-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="filtersModalLabel">خيارات التصفية</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="إغلاق"></button>
            </div>
            <div className="modal-body">
              <div className="mobile-filters">
                <div className="filter-section">
                  <h6>نطاق السعر</h6>
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
                
                <div className="filter-section">
                  <h6>عدد الغرف</h6>
                  <div className="room-buttons">
                    <button 
                      className={`room-filter-btn ${activeFilters.rooms === "" ? "active" : ""}`}
                      onClick={() => setActiveFilters({ ...activeFilters, rooms: "" })}
                    >الكل</button>
                    {[1, 2, 3, 4].map(num => (
                      <button 
                        key={num} 
                        className={`room-filter-btn ${activeFilters.rooms === num.toString() ? "active" : ""}`}
                        onClick={() => setActiveFilters({ ...activeFilters, rooms: num.toString() })}
                      >{num}</button>
                    ))}
                  </div>
                </div>
                
                <div className="filter-section">
                  <h6>عدد السُرُر</h6>
                  <div className="room-buttons">
                    <button 
                      className={`room-filter-btn ${activeFilters.beds === "" ? "active" : ""}`}
                      onClick={() => setActiveFilters({ ...activeFilters, beds: "" })}
                    >الكل</button>
                    {[1, 2, 3, 4].map(num => (
                      <button 
                        key={num} 
                        className={`room-filter-btn ${activeFilters.beds === num.toString() ? "active" : ""}`}
                        onClick={() => setActiveFilters({ ...activeFilters, beds: num.toString() })}
                      >{num}</button>
                    ))}
                  </div>
                </div>
                
                <div className="filter-section">
                  <h6>عدد الحمامات</h6>
                  <div className="room-buttons">
                    <button 
                      className={`room-filter-btn ${activeFilters.bathrooms === "" ? "active" : ""}`}
                      onClick={() => setActiveFilters({ ...activeFilters, bathrooms: "" })}
                    >الكل</button>
                    {[1, 2, 3, 4].map(num => (
                      <button 
                        key={num} 
                        className={`room-filter-btn ${activeFilters.bathrooms === num.toString() ? "active" : ""}`}
                        onClick={() => setActiveFilters({ ...activeFilters, bathrooms: num.toString() })}
                      >{num}</button>
                    ))}
                  </div>
                </div>
                
                <div className="filter-section">
                  <h6>الموقع</h6>
                  <div className="location-buttons">
                    <button 
                      className={`location-btn ${activeFilters.location === "" ? "active" : ""}`}
                      onClick={() => setActiveFilters({ ...activeFilters, location: "" })}
                    >الكل</button>
                    {["صحاري", "البركه", "العقاد", "التأمين"].map(loc => (
                      <button 
                        key={loc} 
                        className={`location-btn ${activeFilters.location === loc ? "active" : ""}`}
                        onClick={() => setActiveFilters({ ...activeFilters, location: loc })}
                      >{loc}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-bs-dismiss="modal"
              >
                إغلاق
              </button>
              <button 
                type="button" 
                className="btn btn-primary" 
                data-bs-dismiss="modal"
                onClick={() => {}}
              >
                تطبيق الفلاتر
              </button>
              {Object.values(activeFilters).some(val => val !== "") && (
                <button 
                  type="button" 
                  className="btn btn-outline-danger" 
                  onClick={() => setActiveFilters({
                    priceRange: "",
                    rooms: "",
                    beds: "",
                    location: "",
                    bathrooms: ""
                  })}
                >
                  إعادة ضبط
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Housing
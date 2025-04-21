import React, { useState } from 'react';
import { FaStar, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import './supermarketspage.css';

const DoctorsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const doctors = [
    {
      id: 1,
      title: 'د. وائل طه',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
      description: 'جراحة العظام والمفاصل ',
      rating: 4.9,
      phone: '01234567893',
      whatsapp: '01234567893',
      facebook: 'https://facebook.com/dr.ahmed',
      address: 'السيل أمام المستشفى العام',
      additionalImages: [
        'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
        'https://images.unsplash.com/photo-1516549655169-df83a0774514'
      ]
    },
    {
      id: 2,
      title: 'د. فاطمة فوزي محمد',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
      description: 'د. أخصائية طب الاطفال ',
      rating: 4.9,
      phone: '01234567893',
      whatsapp: '01234567893',
      facebook: 'https://facebook.com/dr.ahmed',
      address: 'شارع  الشواربي',
      additionalImages: [
        'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
        'https://images.unsplash.com/photo-1516549655169-df83a0774514'
      ]
    },
    {
      id: 3,
      title: 'د. أحمد محمد قناوي',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
      description: 'أخصائي نساء وتوليد',
      rating: 4.9,
      phone: '01234567893',
      whatsapp: '01234567893',
      facebook: 'https://facebook.com/dr.ahmed',
      address: 'ميدان الصالحين أمام الضراب. مواعيد العمل: من الساعة 2:30 مساءً. الإجازة: الجمعة. سعر الكشف: 250 جنيهًا.',
      additionalImages: [
        'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
        'https://images.unsplash.com/photo-1516549655169-df83a0774514'
      ]
    },
    {
      id: 4,
      title: 'د. إلهام صلاح',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
      description: 'أخصائية أمراض الجهاز الهضمي وعسر الهضم .',
      rating: 4.9,
      phone: '01234567893',
      whatsapp: '01234567893',
      facebook: 'https://facebook.com/dr.ahmed',
      address: 'عيادة القدس للجراحة والمناظير',
      additionalImages: [
        'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
        'https://images.unsplash.com/photo-1516549655169-df83a0774514'
      ]
    },
    {
      id: 5,
      title: 'د. محجوب حمزة ',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7', 
      description: 'أخصائي أمراض  الباطنة',
      rating: 4.9,
      phone: '01234567893',
      whatsapp: '01234567893',
      facebook: 'https://facebook.com/dr.ahmed',
      address: 'شارع السودانين ',
      additionalImages: [
        'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
        'https://images.unsplash.com/photo-1516549655169-df83a0774514'
      ]
    },
    {
      id: 6,
      title: 'د. مصطفي حزين  ',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
      description: 'دكتور أسنان ',
      rating: 4.9,
      phone: '01234567893',
      whatsapp: '01234567893',
      facebook: 'https://facebook.com/dr.ahmed',
      address: 'بوابة المحطة ',
      additionalImages: [
        'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
        'https://images.unsplash.com/photo-1516549655169-df83a0774514'
      ]
    },
  ];

  // ✅ الفلترة حسب الاسم أو التخصص أو العنوان
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < Math.floor(rating) ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #1D186263 100%)" }}>
      <div className="section-page-container" dir="rtl">
        <div className="section-header ">
          <h1 className="section-main-title">الأطباء</h1>
        </div>

        <div className="search-container my-4 d-flex justify-content-center">
          <input
            type="text"
            placeholder="ابحث عن دكتور أو عنوان..."
            className="form-control w-75 p-3 rounded-pill shadow-sm text-end"
            style={{ maxWidth: '600px', fontSize: '1.1rem', border: '1px solid #ddd' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="cards-grid">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map(item => (
              <div key={item.id} className="card service-card">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className="rating mb-2">
                    {renderStars(item.rating)}
                    <span className="rating-number">{item.rating}</span>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSelectedItem(item);
                      setMainImage(item.image);
                      setShowModal(true);
                    }}
                  >
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white mt-4">لا توجد نتائج مطابقة</p>
          )}
        </div>

        {showModal && selectedItem && (
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" style={{ marginRight: "50px" }}>{selectedItem.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    style={{ marginLeft: "20px" }}
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="main-image-container">
                        <img src={mainImage} alt={selectedItem.title} className="main-image" />
                      </div>
                      <div className="thumbnail-container">
                        {selectedItem.additionalImages.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`${selectedItem.title} ${index + 1}`}
                            className="thumbnail-image"
                            onClick={() => setMainImage(img)}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="place-details">
                        <h4>{selectedItem.title}</h4>
                        <p className="description">{selectedItem.description}</p>

                        <div className="rating mb-3">
                          <div className="stars">{renderStars(selectedItem.rating)}</div>
                          <span className="rating-number">{selectedItem.rating} / 5</span>
                        </div>

                        <div className="contact-info">
                          <div className="contact-item">
                            <FaPhone className="icon" />
                            <span>{selectedItem.phone}</span>
                          </div>
                          <div className="contact-item">
                            <FaWhatsapp className="icon" />
                            <a href={`https://wa.me/${selectedItem.whatsapp}`} target="_blank" rel="noopener noreferrer">واتساب</a>
                          </div>
                          <div className="contact-item">
                            <FaFacebook className="icon" />
                            <a href={selectedItem.facebook} target="_blank" rel="noopener noreferrer">فيسبوك</a>
                          </div>
                          <div className="contact-item">
                            <FaMapMarkerAlt className="icon" />
                            <span>{selectedItem.address}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {showModal && (
          <div className="modal-backdrop show" onClick={() => setShowModal(false)}></div>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;

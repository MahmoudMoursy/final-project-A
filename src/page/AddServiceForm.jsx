import React, { useState } from 'react';
import './AddServiceForm.css';

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    rating: '',
    phone: '',
    whatsapp: '',
    facebook: '',
    address: '',
    mainImage: null,
    additionalImages: []
  });

  const categories = [
    { id: 1, name: 'المطاعم والكافيهات' },
    { id: 2, name: 'الصيدليات' },
    { id: 3, name: 'الأطباء' },
    { id: 4, name: 'سوبر ماركت' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      mainImage: file
    }));
  };

  const handleAdditionalImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prevState => ({
      ...prevState,
      additionalImages: files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    ////////     هنا اربط الفورم بالداش بورد 
  };

  return (
    <div className="form-container">
      <h2>إضافة خدمة جديدة</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>نوع الخدمة:</label>
          <select 
            name="category" 
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">اختر نوع الخدمة</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>اسم المكان:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>الوصف:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>التقييم:</label>
          <input
            type="number"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            value={formData.rating}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>رقم الهاتف:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>رقم الواتساب:</label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>رابط الفيسبوك:</label>
          <input
            type="url"
            name="facebook"
            value={formData.facebook}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>العنوان:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>الصورة الرئيسية:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleMainImageChange}
            required
          />
          {formData.mainImage && (
            <img 
              src={URL.createObjectURL(formData.mainImage)} 
              alt="Preview" 
              className="image-preview"
            />
          )}
        </div>

        <div className="form-group">
          <label>صور إضافية (حد أقصى 4 صور):</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleAdditionalImagesChange}
            required
          />
          <div className="image-previews">
            {formData.additionalImages.map((image, index) => (
              <img 
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Preview ${index + 1}`}
                className="image-preview"
              />
            ))}
          </div>
        </div>

        <button type="submit" className="submit-button">
          إضافة الخدمة
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
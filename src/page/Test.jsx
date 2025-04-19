import React, { useState } from "react";

export default function ImageUploader() {
  const [images, setImages] = useState([]);
  const [savedImages, setSavedImages] = useState([]);

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

  const handleSave = () => {
    setSavedImages((prev) => [...prev, ...images]);
    setImages([]); // تفريغ التحديد الحالي بعد الحفظ
  };

  return (
    <>
      <style>{`
        .image-preview-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 15px;
        }
        .image-wrapper {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .remove-btn {
          position: absolute;
          top: -8px;
          right: -8px;
          background: red;
          color: white;
          border: none;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          font-size: 12px;
          cursor: pointer;
        }
        .save-btn {
          margin-bottom: 20px;
          padding: 10px 20px;
          background-color: #2E366A;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
        }
        .saved-title {
          font-weight: bold;
          margin-top: 30px;
          margin-bottom: 10px;
        }
      `}</style>

      <div className="mb-3">
        <label className="form-label">الصور</label>
        <input type="file" name="files" multiple onChange={handleFilesChange} />
      </div>

      {images.length > 0 && (
        <>
          <div className="image-preview-container">
            {images.map((img, index) => (
              <div key={index} className="image-wrapper">
                <img src={img.preview} alt={`preview-${index}`} />
                <button type="button" className="remove-btn" onClick={() => removeImage(index)}>x</button>
              </div>
            ))}
          </div>
          <button className="save-btn" onClick={handleSave}>💾 حفظ الصور</button>
        </>
      )}

      {savedImages.length > 0 && (
        <>
          <div className="saved-title">📷 الصور المحفوظة:</div>
          <div className="image-preview-container">
            {savedImages.map((img, index) => (
              <div key={index} className="image-wrapper">
                <img src={img.preview} alt={`saved-${index}`} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import "./profile.css";
import React, { useEffect, useState } from "react";
import db, { auth } from "../firebaseconfig";
import { useAuth } from "../authstorre";
import { collection, query, where, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { Edit, Trash2, Bell, Mail, Smartphone, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { deleteCurrentUser } from '../Redux/CurrentUser';
import { motion } from 'framer-motion';

const Profile = () => {
  const [isActive, setIsActive] = useState(false);
  const [isFirstActive, setIsFirstActive] = useState(false);
  const [isSecondActive, setIsSecondActive] = useState(false);

  const userData = JSON.parse(localStorage.getItem("currentUser"));
  const [editingField, setEditingField] = useState(null);
  const [fieldValues, setFieldValues] = useState({
    email: userData.email || "",
    phonenumber: userData.phonenumber || "",
    city: userData.city || "",
    address: userData.address || "",
    status: userData?.status || ""
  });

  const handleInputChange = (field, value) => {
    setFieldValues({ ...fieldValues, [field]: value });
  };

  const handleSave = async (field) => {
    try {
      const q = query(collection(db, "user"), where("UserId", "==", userData.UserId));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const userDocRef = doc(db, "user", querySnapshot.docs[0].id);
        await updateDoc(userDocRef, { [field]: fieldValues[field] });
        userData[field] = fieldValues[field];
        localStorage.setItem("currentUser", JSON.stringify(userData));
        setEditingField(null);
      }
    } catch (error) {
      console.error("Error updating field:", error);
    }
  };

  const [posts, editPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      if (userData.status === "publisher") {
        setLoading(true);
        try {
          const q = query(collection(db, "housing"), where("Id", "==", userData.UserId));
          const querySnapshot = await getDocs(q);
          const Posts = [];
          querySnapshot.forEach((doc) => {
            Posts.push({ id: doc.id, ...doc.data() });
          });
          editPosts(Posts);
        } catch (error) {
          console.error("Error fetching posts: ", error);
        }
        setLoading(false);
      }
    };
    fetchPosts();
  }, [userData.status]);

  const deletePost = async (id) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        await deleteDoc(doc(db, "housing", id));
        editPosts(posts.filter(post => post.id !== id));
      } catch (error) {
        console.error("Error deleting post: ", error);
      }
    }
  };

  if (!userData) return <div className="loading-spinner">Loading...</div>;

  const nav = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(deleteCurrentUser());
    nav('/');
  };

  return (
    <>
      <NavBar />
      <div className="profile-page" dir="rtl">
        <motion.div 
          className="profile-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundColor: '#243A70' }} // تم تغيير لون الخلفية ليكون مشابهًا للون الشريط
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <motion.div 
              className="avatar-circle"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {userData.username?.charAt(0).toUpperCase() || "U"}
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="user-name" 
            >
              {userData.username || "اسم المستخدم غير متوفر"}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {userData.university || "الجامعة غير متوفرة"}
            </motion.p>
          </div>
        </motion.div>

        <div className="profile-container">
          {/* Personal Information Section */}
          <motion.section className="profile-section">
            <h2 className="section-title">المعلومات الشخصية</h2>
            <div className="info-grid">
              {["email", "phonenumber", "city", "address", "status"].map((fieldKey) => (
                <div className="info-card" key={fieldKey}>
                  <div className="info-header">
                    <span className="info-label">
                      {fieldKey === "email" ? "البريد الإلكتروني" :
                       fieldKey === "phonenumber" ? "رقم الجوال" :
                       fieldKey === "city" ? "المدينة" :
                       fieldKey === "address" ? "العنوان" : "الحالة"}
                    </span>
                    {editingField !== fieldKey && (
                      <button 
                        className="edit-btn"
                        onClick={() => setEditingField(fieldKey)}
                      >
                        <Edit size={16} />
                      </button>
                    )}
                  </div>
                  
                  {editingField === fieldKey ? (
                    <div className="edit-field">
                      {fieldKey === "status" ? (
                        <select
                          value={fieldValues[fieldKey]}
                          onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                          className="form-select"
                        >
                          <option value="publisher">ناشر</option>
                          <option value="veiwer">مشاهد</option>
                        </select>
                      ) : (
                        <input
                          type={fieldKey === "email" ? "email" : "text"}
                          value={fieldValues[fieldKey]}
                          onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                          className="form-input"
                        />
                      )}
                      <div className="edit-actions">
                        <button 
                          className="save-btn"
                          onClick={() => handleSave(fieldKey)}
                        >
                          حفظ
                        </button>
                        <button 
                          className="cancel-btn"
                          onClick={() => setEditingField(null)}
                        >
                          إلغاء
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="info-value">{fieldValues[fieldKey] || "غير محدد"}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Bio Section */}
          <motion.section className="profile-section bio-section">
            <h2 className="section-title">النبذة الشخصية</h2>
            <div className="bio-card">
              <p>{userData.bio || "لا يوجد وصف شخصي مضاف"}</p>
            </div>
          </motion.section>

          {/* Published Housing (for publishers) */}
          {userData?.status === "publisher" && (
            <motion.section className="profile-section">
              <h2 className="section-title">المساكن المنشورة</h2>
              {loading ? (
                <div className="loading-spinner">Loading...</div>
              ) : posts.length > 0 ? (
                <div className="table-container">
                  <div className="table-responsive">
                    <table className="styled-table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>الاسم</th>
                          <th>العنوان</th>
                          <th>الوصف</th>
                          <th>الغرف</th>
                          <th>الحمامات</th>
                          <th>السعر</th>
                          <th>إجراءات</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.map((post, index) => (
                          <tr key={post.id}>
                            <td>{index + 1}</td>
                            <td>{post.username}</td>
                            <td>{post.address}</td>
                            <td className="truncate">{post.description.substring(0, 30)}...</td>
                            <td>{post.numbed}</td>
                            <td>{post.numteu}</td>
                            <td>{post.price} ر.س</td>
                            <td>
                              <button 
                                className="action-btn delete-btn"
                                onClick={() => deletePost(post.id)}
                              >
                                <Trash2 size={16} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="empty-state">
                  <p>لا توجد مساكن منشورة حتى الآن</p>
                </div>
              )}
            </motion.section>
          )}

          {/* Settings Section */}
          <motion.section className="profile-section">
            <h2 className="section-title">إعدادات الحساب</h2>
            <div className="settings-grid">
              <div className="setting-card">
                <div className="setting-icon">
                  <Bell size={20} />
                </div>
                <div className="setting-content">
                  <h3>إشعارات الموقع</h3>
                  <div className="toggle-container" onClick={() => setIsActive(!isActive)}>
                    <div className={`toggle ${isActive ? 'active' : ''}`}></div>
                  </div>
                </div>
              </div>

              <div className="setting-card">
                <div className="setting-icon">
                  <Mail size={20} />
                </div>
                <div className="setting-content">
                  <h3>إشعارات البريد الإلكتروني</h3>
                  <div className="toggle-container" onClick={() => setIsFirstActive(!isFirstActive)}>
                    <div className={`toggle ${isFirstActive ? 'active' : ''}`}></div>
                  </div>
                </div>
              </div>

              <div className="setting-card">
                <div className="setting-icon">
                  <Smartphone size={20} />
                </div>
                <div className="setting-content">
                  <h3>إشعارات الجوال</h3>
                  <div className="toggle-container" onClick={() => setIsSecondActive(!isSecondActive)}>
                    <div className={`toggle ${isSecondActive ? 'active' : ''}`}></div>
                  </div>
                </div>
              </div>

              <div className="setting-card">
                <div className="setting-icon">
                  <Globe size={20} />
                </div>
                <div className="setting-content">
                  <h3>اللغة المفضلة</h3>
                  <p className="setting-value">العربية</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Logout Button */}
          <motion.div className="logout-container">
            <button 
              className="logout-btn"
              onClick={handleLogout}
            >
              تسجيل الخروج
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
      
      <style jsx>{`
        :root {
          --primary-color: #243A70; /* اللون الرئيسي */
          --secondary-color: #0A3B71; /* لون ثانوي أزرق داكن */
          --accent-color: #0A3B71; /* اللون الذهبي */
          --light-color: #F0F4F8; /* لون فاتح للخلفيات */
          --text-color: #333; /* اللون الأساسي للنص */
          --text-light: #555; /* لون نص اقل قوة */
        }

        .profile-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: var(--text-color);
          background-color: #F0F4F8; /* لون الخلفية العام */
          min-height: calc(100vh - 80px);
          padding-top: 80px;
          position: relative;
          direction: rtl; /* إضافة اتجاه الصفحة إلى RTL */
        }
        
        .profile-hero {
          position: relative;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          overflow: hidden;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 20px;
        }
        
        .avatar-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: white;
          color: var(--primary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          font-weight: bold;
          margin: 0 auto 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .profile-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .profile-section {
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          padding: 25px;
          margin-bottom: 30px;
        }

        .section-title {
          color: var(--primary-color);
          margin-bottom: 25px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f0f0f0;
          font-size: 22px;
          position: relative;
        }

        .user-name {
          color: white; /* لون اسم المستخدم */
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        
        .info-card {
          background: #f9fafc;
          border-radius: 8px;
          padding: 20px;
          border-left: 3px solid var(--accent-color);
        }
        
        .info-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        
        .info-label {
          font-weight: 600;
          color: var(--primary-color);
          font-size: 14px;
        }
        
        .edit-btn {
          background: none;
          border: none;
          color: var(--accent-color);
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          transition: all 0.2s;
        }
        
        .edit-btn:hover {
          background: rgba(255, 215, 0, 0.1);
        }
        
        .info-value {
          margin: 0;
          color: var(--text-light);
        }
        
        .edit-field {
          margin-top: 10px;
        }
        
        .form-input, .form-select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-bottom: 10px;
          font-family: inherit;
        }
        
        .edit-actions {
          display: flex;
          gap: 10px;
        }
        
        .save-btn, .cancel-btn {
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .save-btn {
          background: var(--accent-color);
          color: white;
        }
        
        .cancel-btn {
          background: #f0f0f0;
          color: var(--text-light);
        }

        .bio-section .bio-card {
          background: #f9fafc;
          padding: 20px;
          border-radius: 8px;
        }
        
        .settings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        
        .setting-card {
          display: flex;
          align-items: center;
          padding: 15px;
          background: #f9fafc;
          border-radius: 8px;
        }
        
        .setting-icon {
          margin-right: 15px;
          color: var(--accent-color);
          background: rgba(255, 215, 0, 0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .setting-content {
          flex: 1;
        }
        
        .setting-content h3 {
          margin: 0 0 5px;
          font-size: 15px;
          color: var(--primary-color);
        }

        .toggle-container {
          width: 50px;
          height: 24px;
          background-color: #e0e0e0;
          border-radius: 12px;
          position: relative;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .toggle {
          width: 20px;
          height: 20px;
          background-color: white;
          border-radius: 50%;
          position: absolute;
          top: 2px;
          left: 2px;
          transition: all 0.3s ease;
        }
        
        .toggle.active {
          left: 28px;
          background-color: var(--accent-color);
        }
        
        .styled-table {
          width: 100%;
          border-collapse: collapse;
          margin: 25px 0;
          font-size: 14px;
        }
        
        .styled-table thead tr {
          background-color: var(--primary-color);
          color: white;
          text-align: right;
        }
        
        .styled-table th,
        .styled-table td {
          padding: 12px 15px;
          text-align: right;
        }
        
        .styled-table tbody tr:nth-of-type(even) {
          background-color: #f9f9f9;
        }
        
        .action-btn {
          border: none;
          background: none;
          cursor: pointer;
          padding: 5px;
          border-radius: 4px;
        }
        
        .delete-btn {
          color: #dc3545;
        }
        
        .delete-btn:hover {
          background: rgba(220, 53, 69, 0.1);
        }
        
        .truncate {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 150px;
        }
        
        .empty-state {
          text-align: center;
          padding: 40px;
          color: var(--text-light);
        }
        
        .logout-btn {
          display: block;
          width: 100%;
          max-width: 200px;
          margin: 0 auto;
          padding: 12px;
          background: var(--primary-color); /* اللون الجديد */
          color: white;
          border: none;
          border-radius: 25px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .logout-btn:hover {
          transform: translateY(-2px);
          background: var(--secondary-color); /* لون أغمق عند التحويم */
        }
        
        .loading-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
          color: var(--primary-color);
        }
        
        @media (max-width: 768px) {
          .info-grid, .settings-grid {
            grid-template-columns: 1fr;
          }
          
          .profile-hero {
            height: 250px;
          }
          
          .avatar-circle {
            width: 80px;
            height: 80px;
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default Profile;
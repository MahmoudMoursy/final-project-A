import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import "./profile.css";
import React, { useEffect, useState } from "react";
import db, { auth } from "../firebaseconfig";
import { useAuth } from "../authstorre";
import { collection, query, where, getDocs, deleteDoc,updateDoc, doc } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { Table } from 'lucide-react';
import { Button } from 'react-bootstrap';

const Profile = () => {
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
        userData[field] = fieldValues[field]; // تحديث الـ local userData
        localStorage.setItem("currentUser", JSON.stringify(userData)); // تحديث الـ localStorage
        setEditingField(null);
      }
    } catch (error) {
      console.error("Error updating field:", error);
    }
  };  
  const [posts, editPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  if(userData.status=="publisher"){
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, "housing"),
          where("Id", "==", userData.UserId)
        );
        const querySnapshot = await getDocs(q);
        const Posts = [];
    
        querySnapshot.forEach((doc) => {
          Posts.push({ id: doc.id, ...doc.data() });
        });
    
        editPosts(Posts);
        console.log(Posts);
    
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
      setLoading(false);
    };
    useEffect(() => {
           fetchPosts();
    }, []);

  }
  const deletePost = async (id) => {
    if (confirm('Are you sure you want to save this thing into the database?')) {
        try {
            await deleteDoc(doc(db, "housing", id));
            editPosts(posts.filter(post => post.id !== id));
            console.log("Post deleted successfully!");    
          } catch (error) {
            console.error("Error deleting user: ", error);
          }
      } else {
        console.log('Thing was not saved to the database.');
      }
  
  };
        
  if (!userData) return <p>abdala..</p>;

  return (
    <>
      <NavBar />
      <div className="profileContainer">
        <div className="profileCard" style={{ marginTop: "7vh" }}>
          <div className="profileHeader">
            <div className="avatar">س</div>
            <h2 className="userName">{userData.username || "اسم المستخدم غير متوفر"}</h2>
            <p className="userId">الجامعة: <span>{userData.university || "الجامعة غير متوفرة"}</span></p>
            
          </div>

          <div className="infoSection">
            <h3 className="sectionTitle">المعلومات الشخصية</h3>
            { ["email", "phonenumber", "city", "address", "status"].map((fieldKey) => (
              <div className="infoItem" key={fieldKey}>
                <span className="infoLabel">
                  {fieldKey === "email" ? "البريد الإلكتروني:" :
                  fieldKey === "phonenumber" ? "رقم الجوال:" :
                  fieldKey === "city" ? "المدينة:" :
                  fieldKey === "address" ? "العنوان:" :
                  "الحالة:"}
                </span>
                {editingField === fieldKey ? (
                  <>
                    {fieldKey === "status" ? (
                      <select
                        value={fieldValues[fieldKey]}
                        onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                      >
                        <option value="publisher">publisher</option>
                        <option value="veiwer">veiwer</option>
                      </select>
                    ) : (
                      <input
                        type="text"
                        value={fieldValues[fieldKey]}
                        onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                      />
                    )}
                    <Button variant="success" size="sm" onClick={() => handleSave(fieldKey)}>حفظ</Button>
                  </>
                ) : (
                  <>
                    {fieldValues[fieldKey]}
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="ms-2"
                      onClick={() => setEditingField(fieldKey)}
                    >
                      تعديل
                    </Button>
                  </>
                )}
              </div>
            )) }
          </div>

          <div className="infoSection">
            <h3 className="sectionTitle">النبذة الشخصية</h3>
            <p>{userData.bio}</p>
          </div>

          {userData?.status === "publisher" && (
            <div className="infoSection">
              <h3 className="sectionTitle">المساكن المنشورة</h3>
              {loading && <p>Loading...</p>}
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover" style={{ direction: 'ltr' }}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>Address</th>
                      <th>Description</th>
                      <th>Numbed</th>
                      <th>Numteu</th>
                      <th>Phone</th>
                      <th>Whats</th>
                      <th>Price</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post, index) => (
                      <tr key={post.id}>
                        <td>{index + 1}</td>
                        <td>{post.username}</td>
                        <td>{post.address}</td>
                        <td>{post.description}</td>
                        <td>{post.numbed}</td>
                        <td>{post.numteu}</td>
                        <td>{post.phone}</td>
                        <td>{post.whats}</td>
                        <td>{post.price}</td>
                        <td>
                          <Button variant="danger" onClick={() => deletePost(post.id)}>Delete</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      




          <div className="infoSection">
            <h3 className="sectionTitle">المعاملات الأخيرة</h3>
            <div className="transaction">
              <span className="transactionDate">2024/03/15:</span>
              تحويل مالي - 1000 جنيه
            </div>
            <div className="transaction">
              <span className="transactionDate">2024/03/10:</span>
              شحن طرد - 5 كجم
            </div>
            <div className="transaction">
              <span className="transactionDate">2024/03/05:</span>
              توثيق مستندات
            </div>
          </div>

          <div className="infoSection">
            <h3 className="sectionTitle">الإشعارات</h3>
            <div className="notificationsList">
              <div className="notification">
                <div className="notificationIcon">🔔</div>
                <div className="notificationContent">
                  <div className="notificationTitle">تم تأكيد الدفع</div>
                  <div className="notificationText">
                    تم تأكيد دفع مبلغ 1000 جنيه لخدمة تأجير شقة
                  </div>
                  <div className="notificationDate">منذ ساعتين</div>
                </div>
              </div>
              <div className="notification">
                <div className="notificationIcon">📦</div>
                <div className="notificationContent">
                  <div className="notificationTitle">تحديث حالة الخدمة</div>
                  <div className="notificationText">الخدمة قيد التنفيذ</div>
                  <div className="notificationDate">منذ 5 ساعات</div>
                </div>
              </div>
            </div>
          </div>

          <div className="infoSection">
            <h3 className="sectionTitle">إعدادات الحساب</h3>
            <div className="settingsList">
              <div className="settingItem">
                <span className="settingLabel">تفعيل اشعارات الموقع</span>
                <span className="settingStatus">مفعل</span>
              </div>
              <div className="settingItem">
                <span className="settingLabel">إشعارات البريد الإلكتروني</span>
                <span className="settingStatus">مفعل</span>
              </div>
              <div className="settingItem">
                <span className="settingLabel">إشعارات الجوال</span>
                <span className="settingStatus">مفعل</span>
              </div>
              <div className="settingItem">
                <span className="settingLabel">اللغة المفضلة</span>
                <span className="settingValue">العربية</span>
              </div>
            </div>
          </div>
        
          </div>
      <Footer />
    </>
  );
};

export default Profile;

      
 
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import "./profile.css";
import React, { useEffect, useState } from "react";
import db, { auth } from "../firebaseconfig";
import { useAuth } from "../authstorre";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { Table } from 'lucide-react';
import { Button } from 'react-bootstrap';

const Profile = () => {
  // const [userData, setUserData] = useState(null);
  // const { user } = useAuth();
  
    // console.log(user);
  
    // useEffect(() => {
    //   const fetchUserData = async () => {
    //     try {
    //       if (!user) return;
    //       const q = query(collection(db, "user"), where("email", "==", user));
    //       const querySnapshot = await getDocs(q);
  
    //       // console.log(user);
  
    //       if (!querySnapshot.empty) {
    //         setUserData(querySnapshot.docs[0].data());
    //       }
    //     } catch (error) {
    //       console.error("Error fetching user data:", error);
    //       return <p>Error fetching user data. Please try again later.</p>;
    //     }
    //   };
  
    //   fetchUserData();
    // }, []);
  const userData = JSON.parse(localStorage.getItem("currentUser"));
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
            <p className="userId">الجامعه : <span>{userData.university || "الجامعة غير متوفرة"}</span></p>
          </div>

          <div className="infoSection">
            <h3 className="sectionTitle">المعلومات الشخصية</h3>
            <div>
              <div className="infoItem">
                <span className="infoLabel">البريد الإلكتروني:</span>
                {userData.email}
              </div>
              <br />
              <div className="infoItem">
                <span className="infoLabel">رقم الجوال:</span>
                {userData.phonenumber}
              </div>
              <br />
              <div className="infoItem">
                <span className="infoLabel">المدينة:</span>
                {userData.city}
              </div>
              <br />
              <div className="infoItem">
                <span className="infoLabel">العنوان:</span>
                {userData.address}
              </div>
              <div className="infoItem">
                <span className="infoLabel">الحاله:</span>
                {userData.status}
              </div>
            </div>
          </div>

          <div className="infoSection">
            <h3 className="sectionTitle">النبذه الشخصيه</h3>
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
                      <th>description</th>
                      <th>numbed</th>
                      <th>numteu</th>
                      <th>phone</th>
                      <th>whats</th>
                      <th>price</th>
                      <th>delete</th>
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
                        { userData?.status=="publisher" && <td>
                            <Button variant="danger" onClick={() => deletePost(post.id)}>
                            Delete
                            </Button>
                        </td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}



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
      </div>
      <Footer />
    </>
  );
};

export default Profile;

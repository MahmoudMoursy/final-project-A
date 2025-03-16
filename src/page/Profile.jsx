import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import"./profile.css"
import React, { useEffect, useState } from "react";
import db, { auth } from "../firebaseconfig";
import { collection, query, where, getDocs } from "firebase/firestore"
 
const Profile = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!auth.currentUser) return;
        const q = query(collection(db, "user"), where("email", "==", auth.currentUser.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setUserData(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
       
      }
    };
    
    fetchUserData();
  }, []);
  // if (!userData) return <p>Loading...</p>;
  
  return (
    <>
      <NavBar />
      <div className="profileContainer">
        <div className="profileCard">
          <div className="profileHeader">
            <div className="avatar">س</div>
            <h2 className="userName">{userData.username}</h2>
            <p className="userId">الجامعه : <span>{userData.university}</span></p>
          </div>

          <div className="infoSection">
            <h3 className="sectionTitle">المعلومات الشخصية</h3>
            <div >
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
                {userData.address}              </div>
                <div className="infoItem">
                <span className="infoLabel">الحاله:</span>
                {userData.status}              </div>
            </div>
            
          </div>

          <div className="infoSection">
            <h3 className="sectionTitle">النبذه الشخصيه</h3>
            <p>{userData.bio}</p>
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
      </div>
      <Footer />
    </>
  );
};

export default Profile;


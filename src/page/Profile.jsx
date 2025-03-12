
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import"./profile.css"
 

const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="profileContainer">
        <div className="profileCard">
          <div className="profileHeader">
            <div className="avatar">س</div>
            <h2 className="userName">ساره حمدى</h2>
            <p className="userId">رقم العضوية: 123456</p>
          </div>

          <div className="infoSection">
            <h3 className="sectionTitle">المعلومات الشخصية</h3>
            <div className="infoGrid">
              <div className="infoItem">
                <span className="infoLabel">البريد الإلكتروني:</span>
                sarah@example.com
              </div>
              <div className="infoItem">
                <span className="infoLabel">رقم الجوال:</span>
                +966 50 123 4567
              </div>
              <div className="infoItem">
                <span className="infoLabel">المدينة:</span>
                اسوان
              </div>
              <div className="infoItem">
                <span className="infoLabel">العنوان:</span>
                اسوان
              </div>
            </div>
          </div>

          <div className="infoSection">
            <h3 className="sectionTitle">الخدمات المستخدمة</h3>
            <ul className="servicesList">
              <li className="serviceItem">خدمة تأجير شقة</li>
              <li className="serviceItem">خدمة تأجير غرفة</li>
              <li className="serviceItem">خدمة تأجير شقة</li>
            </ul>
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


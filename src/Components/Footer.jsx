
import wasetLogo from '../assets/waset.png';

const Footer = () => {
  return (
    
    <div
      className="container-fluid  text-light "
      style={{ overflow: "hidden", backgroundColor: "#091e3d", direction: "rtl" }}
    >
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-4 col-md-6 footer-about">
            <div className="d-flex flex-column align-items-center justify-content-center text-center p-4">
              <a href="index.html" className="navbar-brand text-center m-auto">
                <img src={wasetLogo} width="220px" alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
            <div className="row gx-5">
              <div className="col-lg-4 col-md-12 pt-5 mb-5">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="text-light mb-0">معلومات الموقع</h3>
                </div>
                <p className="mt-3 mb-4">
                  منصه لمساعده المغتربين في الحصول علي الخدمات بسهوله في كل انحاء المحافظه
                </p>
              </div>
              <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="text-light mb-0">روابط سريعة</h3>
                </div>
                <div className="link-animated d-flex flex-column justify-content-start">
                  <a className="text-light mb-2" href="">
                    <i className="fa-solid fa-arrow-right text-primary mx-2" />
                    الرئيسية
                  </a>
                  <a className="text-light mb-2" href="">
                    <i className="fa-solid fa-arrow-right text-primary mx-2" />
                    التطوع
                  </a>
                  <a className="text-light mb-2" href="">
                    <i className="fa-solid fa-arrow-right text-primary mx-2" />
                    من نحن
                  </a>
                  <a className="text-light mb-2" href="">
                    <i className="fa-solid fa-arrow-right text-primary mx-2" />
                    السكن
                  </a>
                  <a className="text-light" href="">
                    <i className="fa-solid fa-arrow-right text-primary mx-2" />
                    الأماكن السياحية
                  </a>
                  <a className="text-light" href="">
                    <i className="fa-solid fa-arrow-right text-primary mx-2" />
                    الخدمات
                  </a>
                </div>
              </div>
              {/* تابعنا */}
              <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="text-light mb-0">تابعنا</h3>
                </div>
                <div className="d-flex mt-4">
                  <i
                    className="fa-brands fa-facebook mx-2"
                    style={{ fontSize: 30 }}
                  />
                  <i
                    className="fa-brands fa-twitter mx-2"
                    style={{ fontSize: 30 }}
                  />
                  <i
                    className="fa-brands fa-instagram mx-2"
                    style={{ fontSize: 30 }}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center mt-4">
                  <p className="mb-0">
                    ©{" "}
                    <a className="text-white border-bottom" href="#">
                      {" "}
                      خدمات المغتربين
                    </a>
                    . جميع الحقوق محفوظة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Footer;

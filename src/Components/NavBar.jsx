import { useState, useEffect } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import wasetLogo from '../assets/waset.png';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // تغيير الحالة عندما يتجاوز التمرير 100 بكسل
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // إضافة مستمع الحدث للتمرير
    window.addEventListener('scroll', handleScroll);

    // إزالة مستمع الحدث عند تفكيك المكون
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ direction: "rtl" }}>
      <nav className={`navbar navbar-expand-lg navbar-dark d-flex justify-content-around px-4 fixed-top ${isScrolled ? 'scrolled' : 'transparent'}`}>

        <div>
          <NavLink className="nav-link" to="/Home">
            <img src={wasetLogo} alt="Waset Logo" style={{ height: '50px', width: 'auto' }} />
          </NavLink>
        </div>

        <div className="nav collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex gap-1 w-75" style={{paddingRight:100}}>
            <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link" : "nav-link"} to="/Home">الرئيسية</NavLink></li>
            <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link" : "nav-link"} to="/Services">الخدمات</NavLink></li>
            <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link" : "nav-link"} to="/tour">السياحة</NavLink></li>
            <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link" : "nav-link"} to="/housing">السكن</NavLink></li>
            <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link" : "nav-link"} to="/AboutUs">من نحن</NavLink></li>
            <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link" : "nav-link"} to="/Community">المجتمع</NavLink></li>
            {/* <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link" : "nav-link"} to="">التطوع</NavLink></li> */}
            <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link" : "nav-link"} to="/Donation">التبرعات</NavLink></li>
            {/* <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link" : "nav-link"} to="/Profileform">الملف الشخصي</NavLink></li> */}
          </ul>
        </div>
        <div className="d-flex align-items-center justify-content-atod">
          <button className="navbar-toggler" style={{ marginRight: '15%' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <i className="fa-regular fa-bell text-white fs-3 mx-4"></i>

          <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none ms-2">
            <span className="border p-1 me-2 border-success text-black-50 mx-2" 
              style={{ borderRadius: '100%', backgroundColor: '#FFFFFFFF', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              M
            </span>
            <strong className="d-none d-xl-block text-white" id="name">مرسي</strong>
          </a>

          <ul className="menu dropdown-menu text-small fw-bold shadow rounded-3 p-2 text-center"
            style={{ width: '220px', position: 'absolute', left: '84%', top: '54px' }}>
            <li>
              <div className="d-flex justify-content-around align-items-center">
                <img src="https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>مرسي</strong>
                <span className="close">X</span>
              </div>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item" to="/Profile">إعدادات الحساب</NavLink></li>
            <li><a className="dropdown-item bg-danger fw-bold mt-2 px-5 w-25 justify-content-center m-auto d-flex rounded text-white" href="http://localhost:5173/">تسجيل خروج</a></li>
          </ul>
        </div>

      </nav>
    </div>
  );
}

export default NavBar;

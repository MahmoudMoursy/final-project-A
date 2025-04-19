import { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import wasetLogo from '../assets/waset.png';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../Redux/CurrentUser';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));
  dispatch(setCurrentUser(user));

  useEffect(() => {
    const isHomePage = location.pathname === '/Home' || location.pathname === '/home';
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    document.body.classList.toggle('menu-open', newState);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <>
      <div style={{ direction: "rtl" }}>
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top px-4 d-flex justify-content-between ${isScrolled || isMenuOpen ? 'scrolled' : 'transparent'}`}>

          <NavLink className="nav-link" to="/Home">
            <img src={wasetLogo} alt="Waset Logo" style={{ height: '50px' }} />
          </NavLink>

          <div className={`navbar-collapse ${isMenuOpen ? 'show' : 'collapse'}`}>
            <ul className="navbar-nav d-flex gap-1 w-75" style={{ paddingRight: 100 }}>
              <li className="nav-item"><NavLink className="nav-link" to="/Home">الرئيسية</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/Services">الخدمات</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/tour">السياحة</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/housing">السكن</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/AboutUs">من نحن</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/Community">المجتمع</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/Donation">التبرعات</NavLink></li>
            </ul>
          </div>

          <div className="d-flex align-items-center position-relative" ref={dropdownRef}>
            <button className="navbar-toggler" style={{ marginRight: '15%' }} type="button" onClick={toggleMenu}>
              <span className="navbar-toggler-icon"></span>
            </button>

            <i className="fa-regular fa-bell text-white fs-3 mx-4"></i>

            <div className="profile-trigger d-flex align-items-center cursor-pointer" onClick={() => setShowDropdown(prev => !prev)}>
              <span className="border border-success text-black-50 bg-white mx-2 d-flex justify-content-center align-items-center"
                style={{ borderRadius: '50%', width: '30px', height: '30px' }}>
                {user.username[0]}
              </span>
              <strong className="d-none d-xl-block text-white"> {user.username}</strong>
            </div>

            {showDropdown && (
              <div className="profile-dropdown shadow">
                <div className="dropdown-header d-flex justify-content-between align-items-center px-3">
                  <span className="fw-bold">{user.username}</span>
                  <button className="btn-close" onClick={() => setShowDropdown(false)} aria-label="Close"></button>
                </div>
                <hr className="dropdown-divider" />
                <Link to="/Profile" className="dropdown-item">
                  <i className="fa-solid fa-user ms-2"></i>
                  الملف الشخصي
                </Link>
                <button className="dropdown-item text-danger" onClick={handleLogout}>
                  <i className="fa-solid fa-right-from-bracket ms-2"></i>
                  تسجيل الخروج
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;

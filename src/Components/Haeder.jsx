
import './Haeder.css';

function Haeder() {
  return (
    <div id="hero" className="hero-section">
      <video 
        preload="" 
        playsInline 
        loop 
        muted 
        autoPlay 
        onCanPlay={(e) => e.target.play()} 
        onLoadedMetadata={(e) => e.target.muted = true} 
        id="background-video"
      >
        <source src="/video/trailer.mp4" type="video/mp4" />
      </video>
      <div className="upper">
        <div className="container">
          <h1 className="main-title text-white">أسوان بين إيديك</h1>
          <p className="text-white header-desc">من أول السكن لحد الأكل والفسح، أطلب وسيب الباقي علينا</p>
          <p className="text-white header-desc">من بيتك وبضغطة زر</p>
          <div className="d-flex justify-content-end gap-3 mt-5">
            <div className="log d-flex align-items-center">
              <span className="text-white"> هل لديك حساب بالفعل ؟ <a href="/login" className="text-primary text-decoration-none">سجل دخولك</a></span>
            </div>
            <button onClick={() => window.location.href = '/register'} className="primary-btn" tabIndex="0">احجز خدمتك دلوقتي</button>
          </div>
          <a>
            <svg className="arrows">
              <path href="#" d="M0 0 L30 32 L60 0" className="a1"></path>
              <path d="M0 20 L30 52 L60 20" className="a2"></path>
              <path d="M0 40 L30 72 L60 40" className="a3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Haeder;
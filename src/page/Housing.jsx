import React from 'react'
import NavBar from '../Components/NavBar'
import A222 from '../assets/housing/A222.webp'
import A1111 from '../assets/housing/A1111.webp'
import A333 from '../assets/housing/A333.webp'
import A444 from '../assets/housing/A444.webp'
import AA from '../assets/housing/AA.webp'
import Footer from '../Components/Footer'
function Housing() {

  return (
    <>
      <NavBar />
      <div className="w-100 d-flex justify-content-around align-items-center p-2 mb-4" style={{backgroundColor:"#f5f5f5"}}>
        <div className="search-box dark w-50 d-flex gap-2">

          <input
            type="text"
            className="form-control search-input"
            placeholder="....ابحث هنا"
          />
          <button className="btn btn-primary search-button " style={{ width: 150 }}>بحث</button>

        </div>
        <select className="form-select  my-2  mx-2 " style={{ width: 200 }} id="floatingSelectGrid" >
          <option selected="" >عدد الغرف </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>

        <select className="form-select my-2  mx-2 " style={{ width: 200 }} id="floatingSelectGrid">
          <option selected="">عدد السُرُر</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <select className="form-select my-2  mx-2 " style={{ width: 200 }} id="floatingSelectGrid">
          <option selected="">الموقع</option>
          <option value={1}>صحاري</option>
          <option value={2}>البركه</option>
          <option value={3}>العقاد</option>
          <option value={3}>التأمين</option>

        </select>
      </div>

      <>
       <div className='d-flex justify-content-around container'>
        <div>
       <div className="card mb-3 ms-3" style={{ maxWidth: 800 }}>
  <div className="row g-0">
    <div className="col-md-7">
      <div className="card-body text-end">
        <h5 className="card-title fw-bolder  "><span>٨٠٠</span> ج.م شهريا</h5>
        <p className="card-text">
         <span className='fw-bold'>شقه مفروشه للأيجار في مساكن العقاد</span>
         <p>شقه مفروشخ للأيجار في مساكن العقاد الدور الثاني ثلاث غرف  + حمام + مطيخ االغرفه بها 4 سراير</p>
        <div className='d-flex gap-3 text-end'>
        <p><i class="fa-solid fa-bed"></i> : 3 </p>
        <p><i class="fa-solid fa-bath"></i> : 1</p>
        </div>
        </p>
        <div className='d-flex gap-3 text-end'>
        <button type="button" class="btn btn-primary">مكالمه <i class="fa-solid fa-phone-volume mx-2"></i></button>
        <button type="button" class="btn btn-primary">واتساب <i class="fa-brands fa-whatsapp mx-2"></i></button>
        </div>
      
        <p className="card-text">
          <small className="text-body-secondary">
            اسوان , العقاد /  <span>منذ اسبوع </span>
          </small>
        </p>
      </div>
    </div>
    <div className="col-md-5 " style={{width:320,height:200}}>
      <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={A222} className="d-block w-100 h-100 rounded-start" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={A1111} className="d-block w-100 rounded-start" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={A333} className="d-block w-100 rounded-start" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={A444} className="d-block w-100 rounded-start" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={AA} className="d-block w-100 rounded-start" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#cardCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next " type="button" data-bs-target="#cardCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>
</div>
<form  className="p-5 border rounded shadow-sm w-25 bg-white text-end">
      <div className="mb-2">
        <label className="form-label">السعر (بالجنيه)</label>
        <input type="number" name="price" className="form-control" placeholder="مثال: 5000" />
      </div>
      <div className="mb-2">
        <label className="form-label">الموقع</label>
        <div>
          {["العقاد", "المحموديه", "التأمين", "السيل"].map((string) => (
            <div key={string} className="form-check ">
              <input type="radio" name="loc" value={string} className="form-check-input"  />
              <label className="form-check-label">{string}</label>
            </div> 
          ))}
        </div>
      </div>
      <div className="mb-2">
        <label className="form-label">عدد الغرف</label>
        <div>
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="form-check ">
              <input type="radio" name="rooms" value={num} className="form-check-input"   />
              <label className="form-check-label">{num}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-2">
        <label className="form-label">عدد الحمامات</label>
        <div>
          {[1, 2, 3].map((num) => (
            <div key={num} className="form-check ">
              <input type="radio" name="bathrooms" value={num} className="form-check-input"  />
              <label className="form-check-label">{num}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-2">
        <label className="form-label">عدد الافراد</label>
        <div>
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="form-check ">
              <input type="radio" name="beds" value={num} className="form-check-input"   />
              <label className="form-check-label">{num}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-2">
        <label className="form-label">رقم الطابق</label>
        <div>
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="form-check ">
              <input type="radio" name="floor" value={num} className="form-check-input"  />
              <label className="form-check-label">{num}</label>
            </div>
          ))}
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-100 mt-2"> بحث</button>
    </form>
       </div>
      </>
      <Footer />
    </>
  )
}

export default Housing

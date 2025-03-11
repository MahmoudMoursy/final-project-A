import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import user from "../assets/user.jpg";
import"./profile.css"
 

function Profile() {
  return (
    <>
    <NavBar/>

    {/* Profile Section */}
    <section className="container py-5">
      <div className="text-center">
        <div className="profile-img-container mb-3">
          <img
            src={user}
            alt="Profile Picture"
            className="profile-img"
          />
          <span className="edit-icon" title="Change Picture">
            <i className="bi bi-pencil" />
          </span>
        </div>
        <h2>Sarah</h2>
      </div>
      {/* User Information */}
      <div className="row">
        <div className="col-md-6">
          <div className="section">
            <div className="section-title">
              Personal Information
              <button className="btn btn-outline-primary btn-sm edit-button">
                Edit
              </button>
            </div>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Email:</strong> sarah@gmail.com
              </li>
              <li className="list-group-item">
                <strong>Phone:</strong> 01 234 567 890
              </li>
              <li className="list-group-item">
                <strong>Address:</strong> 123 Main St, Aswan, Egypt
              </li>
              <li className="list-group-item">
                <strong>Date of Birth:</strong> January 1, 1990
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="section">
            <div className="section-title">
              Account Details
              <button className="btn btn-outline-primary btn-sm edit-button">
                Edit
              </button>
            </div>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Username:</strong> Sarah
              </li>
              <li className="list-group-item">
                <strong>Membership:</strong> Premium
              </li>
              <li className="list-group-item">
                <strong>Join Date:</strong> March 15, 2022
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="section">
            <div className="section-title">
              Preferences
              <button className="btn btn-outline-primary btn-sm edit-button">
                Edit
              </button>
            </div>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Language:</strong> English
              </li>
              <li className="list-group-item">
                <strong>Notifications:</strong> Enabled
              </li>
              <li className="list-group-item">
                <strong>Theme:</strong> Light Mode
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="section">
            <div className="section-title">
              Activity
              <button className="btn btn-outline-primary btn-sm edit-button">
                Edit
              </button>
            </div>
            <ul className="list-group">
              <li className="list-group-item">Last Login: January 27, 2025</li>
              <li className="list-group-item">Recent Bookings: 3</li>
              <li className="list-group-item">Total Services Used: 15</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </>
  
  )
}

export default Profile
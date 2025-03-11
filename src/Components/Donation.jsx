import { useState } from "react";
import { Heart, DollarSign, CreditCard, CheckCircle } from "lucide-react";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Donation() {
  const [amount, setAmount] = useState("");
  const [selectedTier, setSelectedTier] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const donationTiers = [
    { amount: "25", label: "Supporter" },
    { amount: "50", label: "Champion" },
    { amount: "100", label: "Hero" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid  bg-white min-vh-100">
        {/* Hero Section */}
        <div className="bg-dark text-white py-5 text-center">
          <Heart size={64} className="mb-3" />
          <h1 className="display-4">Make a Difference Today</h1>
          <p className="lead">
            Your generosity can change lives. Every donation counts.
          </p>
        </div>

        {/* Donation Form Section */}
        <div className="container py-5">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              {donationTiers.map((tier) => (
                <div className="col-md-4" key={tier.amount}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTier(tier.amount);
                      setAmount(tier.amount);
                    }}
                    className={`btn btn-outline-dark w-100 py-3 ${selectedTier === tier.amount ? "btn-dark text-white" : ""
                      }`}
                  >
                    <DollarSign size={24} className="mb-2" />
                    <div className="h4">${tier.amount}</div>
                    <div className="small">{tier.label}</div>
                  </button>
                </div>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-3">
              <label className="form-label">Custom Amount</label>
              <div className="input-group">
                <span className="input-group-text">$</span>
                <input
                  type="number"
                  className="form-control"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setSelectedTier("");
                  }}
                  placeholder="Enter amount"
                />
              </div>
            </div>

            {/* Payment Details */}
            <div className="border p-4 rounded mb-3">
              <h3 className="h5">
                <CreditCard size={20} className="me-2" /> Payment Details
              </h3>
              <div className="row g-3 mt-2">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card Number"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name on Card"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="CVC" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-dark w-100 py-3">
              Complete Donation
            </button>
          </form>

          {/* Success Message */}
          {showSuccess && (
            <div className="alert alert-success mt-3 d-flex align-items-center">
              <CheckCircle size={20} className="me-2" /> Thank you for your
              donation!
            </div>
          )}
        </div>

        {/* Footer */}
        <footer
          className="bg-light text-dark text-center py-4 mt-5 border border-success rounded mx-auto shadow-lg"
          style={{ maxWidth: "600px", backgroundColor: "#eaffea" }}
        >
          <p className="mb-1 fw-bold text-success">
            Your donation is securely processed and encrypted.
          </p>
        </footer>

        <Footer />
      </div>
    </>
  );
}

export default Donation;

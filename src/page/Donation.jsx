import { useState, useEffect } from "react";
import { Heart, DollarSign, CreditCard, CheckCircle } from "lucide-react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { motion } from "framer-motion";

function Donation() {
  const [amount, setAmount] = useState("");
  const [selectedTier, setSelectedTier] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const donationTiers = [
    { amount: "25", label: "Supporter", color: "#4CAF50" },
    { amount: "50", label: "Champion", color: "#2196F3" },
    { amount: "100", label: "Hero", color: "#9C27B0" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid bg-gradient min-vh-100" style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", marginTop: "80px", paddingTop: "20px" }}>
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient text-white py-5 text-center"
          style={{ background: "linear-gradient(45deg, #1a237e 0%, #0d47a1 100%)" }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart size={64} className="mb-3 " style={{color:"red"}} />
          </motion.div>
          <h1 className="display-4 fw-bold ">Make a Difference Today</h1>
          <p className="lead text-black fw-bold">Your generosity can change lives. Every donation counts.</p>
        </motion.div>

        {/* Donation Form Section */}
        <div className="container py-5">
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
              className="row mb-4"
            >
              {donationTiers.map((tier, index) => (
                <motion.div
                  className="col-md-4"
                  key={tier.amount}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTier(tier.amount);
                      setAmount(tier.amount);
                    }}
                    className={`btn w-100 py-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg ${selectedTier === tier.amount ? "text-white" : ""}`}
                    style={{
                      background: selectedTier === tier.amount ? tier.color : "white",
                      border: `2px solid ${tier.color}`,
                      color: selectedTier === tier.amount ? "white" : tier.color,
                    }}
                  >
                    <DollarSign size={24} className="mb-2" />
                    <div className="h4">${tier.amount}</div>
                    <div className="small">{tier.label}</div>
                  </button>
                </motion.div>
              ))}
            </motion.div>

            {/* Custom Amount */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-4"
            >
              <label className="form-label fw-bold">Custom Amount</label>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-primary text-white">$</span>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setSelectedTier("");
                  }}
                  placeholder="Enter amount"
                  style={{ fontSize: "1.1rem" }}
                />
              </div>
            </motion.div>

            {/* Payment Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="border p-4 rounded-lg mb-4 bg-light"
            >
              <h3 className="h5 mb-4">
                <CreditCard size={20} className="me-2 text-primary" /> Payment Details
              </h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Card Number"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name on Card"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="CVC"
                  />
                </div>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn btn-primary w-100 py-3 fw-bold rounded-pill"
              style={{ fontSize: "1.2rem", background: "linear-gradient(45deg, #1a237e 0%, #0d47a1 100%)" }}
            >
              Complete Donation
            </motion.button>
          </form>

          {/* Success Message */}
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="alert alert-success mt-4 d-flex align-items-center shadow-lg"
              style={{ background: "linear-gradient(45deg, #43A047 0%, #2E7D32 100%)", color: "white" }}
            >
              <CheckCircle size={24} className="me-2" /> Thank you for your generous donation!
            </motion.div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Donation;

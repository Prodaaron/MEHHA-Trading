import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { db } from "../services/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import "./PartnershipForm.css";

const PartnershipForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    organization: "",
    address: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // -------------------------
  // VALIDATION
  // -------------------------
  const validateForm = () => {
  let newErrors = {};

  if (!form.fullName.trim()) {
    newErrors.fullName = "Full Name is required.";
  }
  if (!form.organization.trim()) {
    newErrors.organization = "Organization name is required.";
  }
  if (!form.address.trim()) {
    newErrors.address = "Address is required.";
  }
  if (!form.phoneNumber || form.phoneNumber.trim().length < 5) {
    newErrors.phoneNumber = "Valid phone number is required.";
  }
  if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
    newErrors.email = "A valid email is required.";
  }

  setErrors(newErrors);

  // ❗ If errors exist, prevent submission
  return Object.keys(newErrors).length === 0;
};


  // -------------------------
  // INPUT HANDLERS
  // -------------------------
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // -------------------------
  // SUBMIT HANDLER
  // -------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      await addDoc(collection(db, "partnershipRequests"), {
        ...form,
        submittedAt: serverTimestamp(),
      });

      // Show success message card
      setSuccessMessage(
        `🎉 Thank you, ${form.fullName}! Your partnership request has been submitted.`
      );

      // Reset form
      setForm({
        fullName: "",
        organization: "",
        address: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setErrors({ submit: "Error submitting request. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="partner-section">
      <div className="partner-container">
        <h2 className="partner-title">Partner With MEHHA</h2>
        <p className="partner-subtitle">For importers, wholesalers, and global representatives who want consistent
        and high-quality access to <br /> Ethiopian oilseeds and pulses.</p>
        <form className="partner-form" onSubmit={handleSubmit}>
          <div className="partner-grid">
            {/* Full Name */}
            <div className="input-box">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={form.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <div className="error">{errors.fullName}</div>}
            </div>

            {/* Organization */}
            <div className="input-box">
              <label>Organization / Company</label>
              <input
                type="text"
                name="organization"
                placeholder="Company Ltd."
                value={form.organization}
                onChange={handleChange}
              />
              {errors.organization && <div className="error">{errors.organization}</div>}
            </div>

            {/* Address */}
            <div className="input-box">
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="City, Country"
                value={form.address}
                onChange={handleChange}
              />
              {errors.address && <div className="error">{errors.address}</div>}
            </div>

            {/* Email */}
            <div className="input-box">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>

            {/* Phone Number */}
            <div className="input-box">
              <label>Phone Number</label>
              <PhoneInput
                international
                defaultCountry="US"
                value={form.phoneNumber}
                onChange={(value) => setForm({ ...form, phoneNumber: value })}
              />
              {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
            </div>

            {/* Message */}
            <div className="input-box wide">
              <label>Message (Optional)</label>
              <textarea
                name="message"
                placeholder="Tell us about your import needs, annual volume, or contract type."
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {errors.submit && <div className="error submit-error">{errors.submit}</div>}

          <button type="submit" className="partner-submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Partnership Request"}
          </button>
        </form>

        {/* Success popup */}
        {successMessage && (
          <div className="success-popup">
            <div className="success-card">
              <p>{successMessage}</p>
              <button
                className="close-btn"
                onClick={() => setSuccessMessage("")}
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnershipForm;
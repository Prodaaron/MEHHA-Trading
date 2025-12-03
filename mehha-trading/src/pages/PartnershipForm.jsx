import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import styles for the phone number input
import { db, storage } from "../services/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./PartnershipForm.css";

const PartnershipForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    organization: "",
    address: "",
    phoneNumber: "",
    message: "",
  });

  const [fileName, setFileName] = useState("");
  const [license, setLicense] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate full name
    if (!form.fullName) {
      newErrors.fullName = "Full Name is required.";
      isValid = false;
    }

    // Validate organization name
    if (!form.organization) {
      newErrors.organization = "Organization name is required.";
      isValid = false;
    }

    // Validate address
    if (!form.address) {
      newErrors.address = "Address is required.";
      isValid = false;
    }

    // Validate phone number
    if (!form.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
      isValid = false;
    }

    // Validate file upload
    if (!license) {
      newErrors.license = "Business license is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setLicense(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      // 1. Upload the file to Firebase Storage
      const fileRef = ref(storage, `licenses/${Date.now()}-${license.name}`);
      await uploadBytes(fileRef, license);
      const fileURL = await getDownloadURL(fileRef);

      // 2. Store form data in Firestore
      await addDoc(collection(db, "partnershipRequests"), {
        fullName: form.fullName,
        organization: form.organization,
        address: form.address,
        phoneNumber: form.phoneNumber,
        licenseFileURL: fileURL,
        message: form.message,
        submittedAt: serverTimestamp(), // Firestore will auto-generate the timestamp
      });

      alert("Thank you for your partnership request! We will get in touch soon.");
      // Clear form after submission
      setForm({
        fullName: "",
        organization: "",
        address: "",
        phoneNumber: "",
        message: "",
      });
      setFileName("");
      setLicense(null); // Reset file state
    } catch (err) {
      console.error("Error submitting partnership request:", err);
      alert("Error submitting request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="partner-section">
      <div className="partner-container">
        <h2 className="partner-title">Partner With MEHHA</h2>
        <form className="partner-form" onSubmit={handleSubmit}>
          <div className="partner-grid">
            <div className="input-box">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                required
                value={form.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <div className="error">{errors.fullName}</div>}
            </div>

            <div className="input-box">
              <label>Organization / Company</label>
              <input
                type="text"
                name="organization"
                placeholder="Company Ltd."
                required
                value={form.organization}
                onChange={handleChange}
              />
              {errors.organization && <div className="error">{errors.organization}</div>}
            </div>

            <div className="input-box">
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="City, Country"
                required
                value={form.address}
                onChange={handleChange}
              />
              {errors.address && <div className="error">{errors.address}</div>}
            </div>

            <div className="input-box">
              <label>Phone Number</label>
              <PhoneInput
                international
                defaultCountry="US"
                value={form.phoneNumber}
                onChange={(value) => setForm({ ...form, phoneNumber: value })}
                className="phone-input"
                required
              />
              {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
            </div>

            <div className="input-box">
              <label>Upload Business License</label>
              <div className="upload-field">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />
                <label className="upload-btn">
                  {fileName ? fileName : "Select a file"}
                </label>
              </div>
              {errors.license && <div className="error">{errors.license}</div>}
              <p className="upload-note">
                Accepted formats: PDF, DOC, DOCX
              </p>
            </div>

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

          <button type="submit" className="partner-submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Partnership Request"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default PartnershipForm;
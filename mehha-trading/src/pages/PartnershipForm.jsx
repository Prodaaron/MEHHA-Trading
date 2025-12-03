import React, { useState } from "react";
import "./PartnershipForm.css";

const PartnershipForm = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <section className="partner-section">
      <div className="partner-container">

        <h2 className="partner-title">Partner Up With Us</h2>
        <p className="partner-sub">
          For importers, wholesalers, and global representatives who want consistent
          and high-quality access to Ethiopian oilseeds and pulses.
        </p>

        <form className="partner-form" onSubmit={(e) => e.preventDefault()}>
          {/* Left side inputs */}
          <div className="partner-grid">
            <div className="input-box">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>

            <div className="input-box">
              <label>Organization / Company</label>
              <input type="text" placeholder="Company Ltd." required />
            </div>

            <div className="input-box">
              <label>Address</label>
              <input type="text" placeholder="City, Country" required />
            </div>

            <div className="input-box">
              <label>Phone Number</label>
              <div className="phone-wrapper">
                <select className="phone-code" required>
                  <option value="+251">+251 ET</option>
                  <option value="+86">+86 CN</option>
                  <option value="+1">+1 US</option>
                  <option value="+44">+44 UK</option>
                  <option value="+966">+966 SA</option>
                  <option value="+971">+971 UAE</option>
                </select>
                <input type="tel" placeholder="123456789" required />
              </div>
            </div>

            <div className="input-box">
              <label>Upload Business License</label>
              <div className="upload-field">
                <input
                  id="licenseUpload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />
                <label htmlFor="licenseUpload" className="upload-btn">
                  {fileName ? fileName : "Select a file"}
                </label>
              </div>
              <p className="upload-note">
                Accepted formats: PDF, DOC, DOCX
              </p>
            </div>

            <div className="input-box wide">
              <label>Message (Optional)</label>
              <textarea
                placeholder="Tell us about your import needs, annual volume, or contract type."
              ></textarea>
            </div>
          </div>

          <button type="submit" className="partner-submit">
            Submit Partnership Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default PartnershipForm;
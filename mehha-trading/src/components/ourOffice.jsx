import React from "react";
import "./ouroffice.css";

const OurOffice = ({
  address = "Tirsit Apartment, Nifas Silk Laphto, Woreda 02, Addis Ababa, Ethiopia",
  email = "mehha.trading@gmail.com",
  phone = "+251 91 123 4996",
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.079962960014!2d38.723854674024345!3d8.976018591083209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8790b4d79473%3A0xf74197f8103b252e!2sTirsit%20Apartment!5e1!3m2!1sen!2sus!4v1771677133930!5m2!1sen!2sus",
}) => {
  return (
    <section className="oo-sec">
      <div className="oo-container">
        
        {/* Office Info */}
        <div className="oo-left">
          <h2 className="oo-h2">Our Office</h2>

          <p className="oo-description">
            Visit us at our office for meetings, consultations, or partnerships.
            We’re always happy to connect and discuss how we can work together.
          </p>

          <div className="oo-details">
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="oo-right">
          <iframe
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="office-location"
          />
        </div>

      </div>
    </section>
  );
};

export default OurOffice;
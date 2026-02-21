import React from "react";

const OurOffice = ({
  address = "Tirsit Apartment, Nifas Silk Laphto, Woreda 02, Addis Ababa, Ethiopia",
  email = "mehha.trading@gmail.com",
  phone = "+251 91 123 4996",
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.079962960014!2d38.723854674024345!3d8.976018591083209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8790b4d79473%3A0xf74197f8103b252e!2sTirsit%20Apartment!5e1!3m2!1sen!2sus!4v1771677133930!5m2!1sen!2sus",
}) => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Office Info */}
        <div style={styles.info}>
          <h2 style={styles.heading}>Our Office</h2>
          <p style={styles.description}>
            Visit us at our office for meetings, consultations, or partnerships.
            We’re always happy to connect and discuss how we can work together.
          </p>

          <div style={styles.details}>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
          </div>
        </div>

        {/* Google Map */}
        <div style={styles.mapWrapper}>
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={styles.map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="office-location"
          />
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 20px",
    background: "#f9f9f9",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
  },
  info: {},
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#555",
  },
  details: {
    marginTop: "20px",
    lineHeight: "1.8",
  },
  mapWrapper: {
    width: "100%",
    height: "400px",
  },
  map: {
    border: 0,
    borderRadius: "12px",
  },
};

export default OurOffice;
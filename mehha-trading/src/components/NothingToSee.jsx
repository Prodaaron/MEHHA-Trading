import React from "react";
import "./NothingToSee.css";
import { FaRegEyeSlash } from "react-icons/fa";

const NothingToSee = () => {
  return (
    <div className="nothing-container">
      <div className="nothing-card">
        <FaRegEyeSlash className="nothing-icon" />
        <h2>Nothing to see here</h2>
        <p>
          Shhh 🤫 You weren’t supposed to find this page yet.  
          Check back soon!
        </p>
        <a href="/" className="nothing-btn">Back to home</a>
      </div>
    </div>
  );
};

export default NothingToSee;
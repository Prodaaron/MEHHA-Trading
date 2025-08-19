import React from "react";
import { companies } from "../services/data.js"; // adjust path
import "./list.css";

const List = () => {
  return (
   <div className="company-section">
        <h1>Our Companies & Shares</h1>
        <hr />
        <div className="company-list">
            {companies.map((company) => (
            <div className="company-card" key={company.id}>
                <img src={company.logo} alt={company.name} className="company-logo" />
                <h3 className="company-name">{company.name}</h3>
                <p className="company-category">{company.category}</p>
                <p className="company-description">{company.description}</p>
            </div>
            ))}
        </div>
    </div>

  );
};

export default List;
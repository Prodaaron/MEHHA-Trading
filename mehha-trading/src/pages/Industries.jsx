import React, { useState } from "react";
import UnderConstruction from '../components/UnderConstruction';
import "./industry.css";
import { companies } from '../services/data.js';

const categories = ["Manufacturing", "Import & Export", "Real estate", "Education"];

const Industries = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    if (category === "All") {
      if (selectedCategories.length === categories.length) {
        setSelectedCategories([]);
      } else {
        setSelectedCategories([...categories]);
      }
    } else {
      setSelectedCategories((prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev, category]
      );
    }
  };

  const isAllSelected = selectedCategories.length === categories.length;

  const filteredCompanies =
    selectedCategories.length === 0
      ? companies
      : companies.filter((company) =>
          selectedCategories.includes(company.category)
        );

  return (
    <div className="industry">
      <h1>Our Companies & Shares</h1>
      <hr />

      <p className="Industry-label">Industry</p>
      {/* Categories filter */}
      <div className="category-filters">
        <label className="filter-option">
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={() => handleCategoryChange("All")}
            ch
          />
          All
        </label>

        {categories.map((cat) => (
          <label key={cat} className="filter-option">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      {/* Companies list */}
      <div className="company-list">
        {filteredCompanies.map((company) => (
          <a
            key={company.id}
            href={company.link}
            className="company-card"
          >
            <img className="list-logo" src={company.logo} alt={company.name} />
            <h2>{company.name}</h2>
            <p>{company.category}</p>
          </a>
        ))}
      </div>
    </div>
  );
};


export default Industries;

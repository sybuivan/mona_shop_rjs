import React from "react";
import PropTypes from "prop-types";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import FilterbyCategory from "../Filter/filterByCategory";
import "./style.scss";

const FilterBar = ({ onChange, filters }) => {
  
  if (filters) {
    var idCategory = filters.idCategory;
  }
  const handleCategoryChange = ({ idCategory, path }) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      idCategory: idCategory + "",
      path: path
    };

    onChange(newFilters);
  };

  return (
    <div>
      <FilterbyCategory
        onChange={handleCategoryChange}
        idCategory={idCategory}
      />
      
    </div>
  );
};

FilterBar.propTypes = {};

export default FilterBar;

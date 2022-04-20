import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import categoryApi from "../../../../api/categoryApi";

const FilterbyCategory = ({ onChange , idCategory}) => {
  const [categories, setCategories] = useState([]);
  const [activeId, setActiveId] = useState(idCategory);

  console.log('active', typeof activeId);
  useEffect(() => {
    try {
      (async () => {
        const response = await categoryApi.getAll();
        const dataCategory = response.data.category;

        setCategories(
          dataCategory.map((category) => ({
            id: category.idCategory,
            name: category.name,
          }))
        );
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleClick = (idCategory) => {
    if (!onChange) return;

    setActiveId(idCategory);
    onChange(idCategory);
  };

  return (
    <div className="filter-bar">
      <div className="filter-bar__head">
        <AiOutlineBars />
        <span>Tất cả danh mục</span>
      </div>

      <div className="filter-bar__category">
        <ul className="filter-bar__category-list">
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleClick(category.id)}
              className={category.id === Number(activeId) ? "active" : ""}
            >
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

FilterbyCategory.propTypes = {};

export default FilterbyCategory;

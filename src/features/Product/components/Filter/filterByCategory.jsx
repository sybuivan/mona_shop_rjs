import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import categoryApi from "../../../../api/categoryApi";
import { useNavigate } from "react-router";

const FilterbyCategory = ({ onChange, idCategory }) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        const response = await categoryApi.getAll();
        const dataCategory = response.data.category;

        setCategories(
          dataCategory.map((category) => ({
            id: category.idCategory,
            name: category.name,
            path: category.path,
          }))
        );
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleClick = (idCategory, path) => {
    if (!onChange) return;

    // setActiveId(idCategory);
    console.log("active", idCategory);

    onChange({ idCategory, path });
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
              onClick={() => handleClick(category.id, category.path)}
              className={category.id === Number(idCategory) ? "active" : ""}
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

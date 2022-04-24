import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineCaretDown, AiOutlineCheck } from "react-icons/ai";
import "./style.scss";

const FilterSortOption = ({ filters, onChange }) => {
  const [isActive, setIsActive] = useState(1);
  const [title, setTitle] = useState("Giá");

  const options = [
    {
      id: 1,
      title: "Phổ biến",
    },
    {
      id: 2,
      title: "Mới nhất",
      value: "DESC",
    },
    {
      id: 3,
      title: "Bán chạy",
    },
  ];

  const optionsPrice = [
    {
      id: 1,
      title: "Giá: Thấp đến cao",
      value: "ASC",
    },
    {
      id: 1,
      title: "Giá: Cao đến thấp",
      value: "DESC",
    },
  ];

  const handleClick = (option) => {
    const { value, id } = option;
    setIsActive(id);
    setTitle("Giá")

    if (!onChange) return;

    onChange({
      ...filters,
      sortByPrice: "",
      sortBySale: value,
    });
  };

  const handleClickPrice = (option) => {
    const { id, value, title } = option;
    setTitle(title);
    setIsActive(0)

    if (!onChange) return;

    onChange({
      ...filters,
      sortBySale: "",
      sortByPrice: value,
    });
  };

  return (
    <div className="filter-sort">
      <div className="filter-sort__wrapper">
        <div className="filter-sort__label">
          <span>Sắp xếp theo</span>
        </div>
        <div className="filter-sort__options">
          {options.map((option) => (
            <div
              key={option.id}
              className={
                isActive === option.id
                  ? "filter-sort__options-option filter-sort__options-option--active"
                  : "filter-sort__options-option"
              }
              onClick={() => handleClick(option)}
            >
              {option.title}
            </div>
          ))}
        </div>

        <div className="filter-sort__select">
          <div className="filter-sort__select-price">
            <div className="filter-sort__select-head">
              <span>{title}</span>

              <AiOutlineCaretDown />
            </div>
            <div className="filter-sort__select-options">
              {optionsPrice.map((item) => (
                <div className="filter-sort__select-wrapper">
                  <span
                    className="filter-sort__select-options--asc"
                    key={item.id}
                    onClick={() => {
                      handleClickPrice(item);
                    }}
                  >
                    {item.title}
                  </span>
                  {title === item.title ? <AiOutlineCheck /> : ""}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="filter-sort__pagination">Pagination</div>
    </div>
  );
};

FilterSortOption.propTypes = {};

export default FilterSortOption;

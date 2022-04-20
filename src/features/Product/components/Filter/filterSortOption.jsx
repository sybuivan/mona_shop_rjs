import React from "react";
import PropTypes from "prop-types";
import { AiOutlineCaretDown } from "react-icons/ai";
import "./style.scss";

const FilterSortOption = () => {
  return (
    <div className="filter-sort">
      <div className="filter-sort__wrapper">
        <div className="filter-sort__label">
          <span>Sắp xếp theo</span>
        </div>
        <div className="filter-sort__options">
          <div className="filter-sort__options-option filter-sort__options-option--active">
            Phổ biến
          </div>
          <div className="filter-sort__options-option">Mới nhất</div>
          <div className="filter-sort__options-option">Bán chạy</div>
        </div>

        <div className="filter-sort__select">
          <div className="filter-sort__select-price">
            <div className="filter-sort__select-head">
              <span>Giá</span>

              <AiOutlineCaretDown />
            </div>
            <div className="filter-sort__select-options">
              <span className="filter-sort__select-options--asc">
                Giá: Thấp đến cao
              </span>
              <span className="filter-sort__select-options--desc">
                Giá: Cao đến thấp
              </span>
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

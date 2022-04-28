import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const FormSearch = () => {
  return (
    <form
      onsubmit="event.preventDefault();"
      role="search"
      className="form-search"
    >
      <input
        id="search"
        type="search"
        placeholder="Tìm kiếm..."
        autofocus
        autocomplete="off"
      />
      <button type="submit" className="search-submit">
        <BsSearch />
      </button>
    </form>
  );
};

FormSearch.propTypes = {};

export default FormSearch;

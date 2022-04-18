import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const useStyles = makeStyles({
  breadcrumb: {},

  breadcrumbTitle: {
    fontSize: "1.2em",
  },
});

const BreadcrumbCom = ({ title }) => {
  const classes = useStyles();

  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">Trang chủ</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{title}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

BreadcrumbCom.propTypes = {};

export default BreadcrumbCom;

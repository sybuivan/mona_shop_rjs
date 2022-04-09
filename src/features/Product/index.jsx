import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Route, Routes } from "react-router";
import DetailProduct from "./page/DetailsProduct";

function ProductFeature(props) {
  return (
    <Box pt={4}>
      <Routes>
        <Route path="/:productId" element={<DetailProduct />} />
      </Routes>
    </Box>
  );
}

ProductFeature.propTypes = {};

export default ProductFeature;

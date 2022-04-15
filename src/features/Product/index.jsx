import React from "react";
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


export default ProductFeature;

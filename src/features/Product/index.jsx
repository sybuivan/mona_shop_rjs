import React from "react";
import { Box } from "@mui/system";
import { Route, Routes } from "react-router";
import DetailProduct from "./page/DetailsProduct";
import ListPageProduct from "./page/ListPage";
import "./responsive.scss";

function ProductFeature(props) {
  return (
    <Box pt={4}>
      <Routes>
        <Route path="/:idCategory" element={<ListPageProduct />}>
          <Route path="product/:productId" element={<DetailProduct />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default ProductFeature;

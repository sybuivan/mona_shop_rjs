import React from "react";

import CheckoutPage from "./page/CheckoutPage";
import CheckoutComplate from "./page/CheckoutComplate";
import { Route, Routes } from "react-router";

function CheckoutFeature(props) {
  return (
    <div style={{ padding: "20px 0" }}>
      <Routes>
        <Route path="/" element={<CheckoutPage />} />
        <Route path="/complate" element={<CheckoutComplate />} />
      </Routes>
    </div>
  );
}

CheckoutFeature.propTypes = {};

export default CheckoutFeature;

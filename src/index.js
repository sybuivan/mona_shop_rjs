import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Content from "./components/Content";
import LoginFeature from "./features/Auth/components/Login";
import RegisterFeature from "./features/Auth/components/Register";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import ProductFeature from "./features/Product";
import CartFeature from "./features/Cart";
import store from "./app/store";
import CheckoutFeature from "./features/Checkout";
import DetailProduct from "./features/Product/page/DetailsProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Content />} />
            <Route path="/product/:productId" element={<DetailProduct />} />
            <Route path="login" element={<LoginFeature />} />
            <Route path="register" element={<RegisterFeature />} />

            <Route path="category/*" element={<ProductFeature />} />

            <Route path="cart" element={<CartFeature />} />
            <Route path="checkout" element={<CheckoutFeature />} />
          </Route>
        </Routes>
      </Provider>
    </SnackbarProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

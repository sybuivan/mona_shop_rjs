import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginFeature from "./features/Auth/components/Login";
import RegisterFeature from "./features/Auth/components/Register";
import reportWebVitals from "./reportWebVitals";
import Content from "./components/Content";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import store from "./app/store";
import ProductFeature from "./features/Product";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<Content />} />
              <Route path="login" element={<LoginFeature />} />
              <Route path="register" element={<RegisterFeature />} />

              <Route path="products/*" element={<ProductFeature />} />
            </Route>
          </Routes>
        </Provider>
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

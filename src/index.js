import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginFeature from "./features/Auth/components/Login";
import RegisterFeature from "./features/Auth/components/Register";
import reportWebVitals from "./reportWebVitals";
import Content from "./components/Content";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Content />} />
          <Route path="login" element={<LoginFeature />} />
          <Route path="register" element={<RegisterFeature />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

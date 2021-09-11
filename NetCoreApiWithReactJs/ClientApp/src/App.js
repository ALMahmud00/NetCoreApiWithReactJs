import React from "react";
import { ToastContainer } from "react-toastify";
import BasePage from "./router/basePage";

// css
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/responsive.css";
import "./assets/css/main.css";

function App() {
  return (
    <div className="app">
      <BasePage />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;

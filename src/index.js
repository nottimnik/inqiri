import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";
import "../src/styles/bootstrap.css";
import "../src/styles/bootstrap-icons.css";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/fonts/bootstrap-icons.min.css"

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

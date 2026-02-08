import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DynamicComp from "./Components/DynamicComp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <DynamicComp />
  </StrictMode>,
);

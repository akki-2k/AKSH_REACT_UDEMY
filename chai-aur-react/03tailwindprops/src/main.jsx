import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Card from "./components/card.jsx";

let sampleObjOne = {
  name: "akshay",
  age: 24,
};
let sampleObjTwo = {
  name: "Mandy",
  age: 4,
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Card title="this is First title" view="22" myObject={sampleObjOne} />
    <Card title="this is second title" view="100" myObject={sampleObjTwo} />
  </StrictMode>,
);

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Header() {
  return <header>This is the header</header>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>UDEMY REACT COURSE</h1>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import DynamicComp from "./Components/DynamicComp.jsx";
import ReusableComp from "./Components/ReusableComp.jsx";
import TabButton from "./Components/TabButton.jsx";
import viteLogo from "/vite.svg";
import "./App.css";
import { CORE_CONCEPTS } from "./data.js";

function Header() {
  return <header>This is the header</header>;
}

function App() {
  const [count, setCount] = useState(0);
  function handleSelect() {
    console.log("Hello There - slected");
  }
  return (
    <>
      <h1>UDEMY REACT COURSE</h1>

      <h1 className="">Our Values</h1>
      <div className="clientContainer mt-10 flex-row flex">
        <ReusableComp
          image="/src/assets/coder.png"
          value={CORE_CONCEPTS[0].title}
          description="{CORE_CONCEPTS[0].description}"
        />
        <ReusableComp
          image="/src/assets/coder.png"
          value={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description}
        />
        <ReusableComp
          image="/src/assets/coder.png"
          value={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
        />
      </div>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={handleSelect}>Components</TabButton>
          <TabButton onSelect={handleSelect}>JSX</TabButton>
          <TabButton onSelect={handleSelect}>Props</TabButton>
          <TabButton onSelect={handleSelect}>State</TabButton>
        </menu>
      </section>
    </>
  );
}

export default App;

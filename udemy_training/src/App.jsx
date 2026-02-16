import { useState } from "react";
import reactLogo from "./assets/react.svg";
import DynamicComp from "./Components/DynamicComp.jsx";
import ReusableComp from "./Components/ReusableComp.jsx";
import TabButton from "./Components/TabButton.jsx";
import viteLogo from "/vite.svg";
import "./App.css";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import { jsx } from "react/jsx-runtime";
import Section from "./Components/Section.jsx";

function Header() {
  return <header>This is the header</header>;
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = "Please select a topic";
  if (selectedTopic) {
    tabContent = (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </div>
    );
  }

  return (
    <>
      <h1>UDEMY REACT COURSE</h1>
      <h1 className="">Our Values</h1>
      <div className="clientContainer mt-10 flex-row flex">
        {/* ITERATING LIST OF OBJECTS TO CREATE REUSABLE COMPONENTS DYNAMICALLY */}
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <ReusableComp {...conceptItem} />
          ))}
        </ul>
      </div>
      <Section id="examples" title="Examples">
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onClick={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onClick={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onClick={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onClick={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>
        {tabContent}
      </Section>
    </>
  );
}

export default App;

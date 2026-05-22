import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(2);
  const increaseCount = () => {
    setCount((prevValue)=> (prevValue+1));
    setCount((prevValue)=> (prevValue+1));
    setCount((prevValue)=> (prevValue+1));
    
  };
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <button onClick={increaseCount}> increase</button>
      <button onClick={decreaseCount}> Decrese</button>
      <h4>count is {count}</h4>
    </>
  );
}

export default App;

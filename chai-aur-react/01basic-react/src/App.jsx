import { useState } from "react";

function App() {
 let [count, setCount] = useState(0);
function clickHandler() {
  setCount(count+1);
}
function resethandle(){
  setCount(0)
}
  return (
    <>
      <h1>Hello Guys</h1>
      <button onClick={clickHandler}>count is {count}</button>
      <button onClick={resethandle}>Reset </button>
    </>
  );
}

export default App;

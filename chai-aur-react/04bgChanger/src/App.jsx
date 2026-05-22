import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex-wrap justify-center bottom-12
      inset-x-0 px-2"
      >
        <div className="flex flex-wrap gap-3 justify-center shadow-lg bg-white rounded-3xl py-2">
          <button onClick={()=> setColor("red")} className="bg-red-700 p-3 rounded">Red</button>
          <button onClick={()=> setColor("blue")} className="bg-blue-700 p-3 rounded">Blue</button>
          <button onClick={()=> setColor("green")} className="bg-green-700 p-3 rounded">green</button>
          <button onClick={()=> setColor("orange")} className="bg-orange-700 p-3 rounded">orange</button>
          <button onClick={()=> setColor("black")} className="bg-black p-3 rounded text-white">Black</button>
          <button onClick={()=> setColor("brown")} className="bg-amber-900 p-3 rounded">Brown</button>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useSelector } from "react-redux";
import "./App.css";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./redux/counter/CounterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrementClick = () => {
    dispatch(increment());
  };
  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }
  function handleCustomClick() {
    dispatch(incrementByAmount(Number(amount)));
  }

  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <div>{count}</div>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleResetClick}>Reset</button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleCustomClick}>Add to count</button>
    </div>
  );
}

export default App;

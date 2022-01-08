import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const increaseHandler = () => {
    setNumber(prevState => prevState + 1);
    console.log(number);
  };
  const decreaseHandler = () => {
    setNumber(prevState => prevState - 1);
    console.log(number);
  };

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <div className="counter">{number}</div>
      <div className="counter-btn">
        <div>
          <button onClick={decreaseHandler} className="decrease-btn">
            Decrease
          </button>
        </div>
        <div>
          <button onClick={increaseHandler} className="increase-btn">
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

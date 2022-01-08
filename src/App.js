import React from "react";
import "./App.css";

function App() {
  const increaseHandler = () => {};
  const decreaseHandler = () => {};

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <div className="counter">0</div>
      <div className="counter-btn">
        <div>
          <button className="decrease-btn">Decrease</button>
        </div>
        <div>
          <button className="increase-btn">Increase</button>
        </div>
      </div>
    </div>
  );
}

export default App;

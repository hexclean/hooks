import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const increaseHandler = () => setNumber(prevState => prevState + 1);

  const decreaseHandler = () => setNumber(prevState => prevState - 1);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          setLoading(true);
          return response.json();
        })
        .then(json => {
          setUsers(json);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  }, []);

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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <React.Fragment>
          {users.map(user => (
            <p key={user.id}>{user.name}</p>
          ))}
        </React.Fragment>
      )}
    </div>
  );
}

export default App;

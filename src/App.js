import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const functions = new Set();

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = () => setCount1(count1 + 1);
  const incrementCount2 = () => setCount2(count2 + 1);
  const logName = () => console.log("Boss");

  functions.add(logName);

  console.log(functions);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Count1:{count1}
        <button className="btn" onClick={incrementCount1}>
          Increase Count1
        </button>
        Count2:{count2}
        <button className="btn" onClick={incrementCount2}>
          Increase Count2
        </button>
        <button className="btn" onClick={logName}>
          Log Name
        </button>
      </header>
    </div>
  );
};

export default App;

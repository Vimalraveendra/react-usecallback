import React, { useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

const functions = new Set();

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  //  usecallback hook allows us to memorize a function that we wrap
  // in it & use the same function if it already exists. it take two
  // arguments, first argument is a function we want to memorize. The
  // second argument is an array of dependencies just like our useEffect
  //The only difference is that this array is mandatory with the usecallback hook.
  const incrementCount1 = useCallback(() => setCount1(count1 + 1), [count1]);
  const incrementCount2 = useCallback(() => setCount2(count2 + 1), [count2]);
  const logName = useCallback(() => console.log("Boss"), []);

  functions.add(incrementCount1);
  functions.add(incrementCount2);
  // functions.add(logName);

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

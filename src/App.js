import React, { useState, useCallback, useMemo, Profiler } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person.component";

const functions = new Set();

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [person] = useState({ name: "Jose", age: 45 });
  //  usecallback hook allows us to memorize a function that we wrap
  // in it & use the same function if it already exists. it take two
  // arguments, first argument is a function we want to memorize. The
  // second argument is an array of dependencies just like our useEffect
  //The only difference is that this array is mandatory with the usecallback hook.
  const incrementCount1 = useCallback(() => setCount1(count1 + 1), [count1]);
  const incrementCount2 = useCallback(() => setCount2(count2 + 1), [count2]);
  const logName = useCallback(() => console.log("Boss"), []);

  // functions.add(incrementCount1);
  // functions.add(incrementCount2);
  // functions.add(logName);

  //  useMemo allows us to not to recompute the value of a function everytime
  // whenever the components re renders
  // so this function is depend on the count1, which means that this function
  // only recompute value when the count1 value changes.
  // useMemo used to memorize the output of this function.
  const doSomethingComplicated = useMemo(() => {
    console.log("I am computing something complex");
    return ((count1 * 1000) % 12.4) * 51000 - 4000;
  }, [count1]);

  console.log(functions);

  // React API Profiler is a component that allows to check how much
  // time it takes our component to render or mount
  // for that we need to wrap the component we want to check inside the profiler
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Profiler
          id="person"
          onRender={(id, phase, actualDuration) => {
            console.log({
              id,
              phase,
              actualDuration,
            });
          }}
        >
          <Person person={person} />
        </Profiler>
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
        ComplexVaue:{doSomethingComplicated}
      </header>
    </div>
  );
};

export default App;

import { useState } from "react";

export const StateTutorial = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Home");

  const increment = () => {
      setCounter(counter => counter + 1);
  };
  const onChange = (e) => {
      setInputValue(e.target.value);
  };
  return (
    <div>
    <h1>State {counter}</h1>
    <button onClick={increment}>Increment</button>
    <div>
        <input placeholder="Enter something here" onChange={onChange} />
       <span>inputValue:  {inputValue}</span>
    </div>
</div>
  )
}
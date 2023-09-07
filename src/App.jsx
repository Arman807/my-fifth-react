import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Users from "./Users";
import Practice from "./Practice";
import Friend from "./Friend";

function App() {
  // const [count, setCount] = useState(0)
  function handleClick() {
    alert("Button is clicked");
  }
  const arrayFunciton = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <Practice></Practice>
      <Users></Users>
      <Counter></Counter>
      <h3>Sajedur Rahman Arman</h3>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          alert("Third Button clicked");
        }}
      >
        Click me
      </button>
      <button
        onClick={() => {
          arrayFunciton(5);
        }}
      >
        Add
      </button>
    </>
  );
}

export default App;

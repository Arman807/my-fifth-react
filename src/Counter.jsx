import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const hangleTheCounter = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce=()=>{
    const backCount=count -1;
    setCount(backCount)
  }
  return (
    <div style={{ border: "2px solid black" }}>
      <h3>Counter:{count}</h3>
      <button onClick={hangleTheCounter}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}

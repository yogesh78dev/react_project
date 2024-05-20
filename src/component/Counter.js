import React, { useEffect, useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);
  const increment = () => setNum(num + 1);
  const decrement = () => setNum(num - 1); 

  useEffect(() =>{
    console.log("you clicked button " +num );
  },[num]);

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={increment}>Increment</button>
      <h2>You clicked {num} times</h2>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;

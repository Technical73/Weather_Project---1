import React, { useCallback, useDebugValue } from "react";
import { useState } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(["props1", "props2", "props3"]);
  const [cart, setCart] = useState(0);

  function handleCount() {
    setCount((prev) => prev + 1);
  }
  useDebugValue(count);

  const addCart = useCallback(() => {
    setCart((prev) => prev + 1);
  }, [cart]);

  return (
    <div className="App">
      <h3>Count: {count}</h3>
      <button type="button" onClick={handleCount}>
        Count the Value
      </button>
      <h3>Cart: {cart} </h3>

      {data.map((items, i) => {
        return <Child name={items} key={i} addCart={addCart} />;
      })}
    </div>
  );
}

export default App;

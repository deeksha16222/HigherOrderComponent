import "./styles.css";
import React, { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <h1> Higher Order Component </h1>
      <HOCRed comp={Counter} />
    </div>
  );
}

function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "red" }}>
      {" "}
      Increment <props.comp />{" "}
    </h2>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2> {count} </h2>
      <button onClick={() => setCount(count + 1)}> Update </button>
    </div>
  );
}

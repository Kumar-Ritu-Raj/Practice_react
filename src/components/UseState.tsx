import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h5>Counters that update separately</h5>
      <MyButtons />
      <MyButtons />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButtons() {
  const [count, setCount] = useState(0);

  function handleClicked() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClicked}>Clicked separately {count} times</button>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

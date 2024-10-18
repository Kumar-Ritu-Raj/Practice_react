import React, { useState } from "react";

export default function ReactMemo() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h5>Counters that update separately</h5>
      <MyComponentWithoutProps />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

const MyComponentWithoutProps = React.memo(() => {
  console.log("MyButtonComponent not re render");
  return (
    <div>
      <h4>My Buttons Clicked times</h4>
    </div>
  );
});

function MyButton({ count, onClick }) {
  console.log(
    "Only this component re render again and again while we change the data"
  );
  return <button onClick={onClick}>Clicked {count} times</button>;
}

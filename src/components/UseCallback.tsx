import React, { useState, useCallback } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(0);

  // Using useCallback to memoize handleClick to avoid unnecessary re-renders
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h4>Counters that update separately</h4>
      <MyComponentWithoutProps count={2} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

interface MyComponentWithoutPropsProps {
  count: number;
}

const MyComponentWithoutProps = React.memo(
  ({ count }: MyComponentWithoutPropsProps) => {
    console.log("MyComponentWithoutProps not re-rendering");
    return (
      <div>
        <h5>My Buttons Clicked {count} times</h5>
      </div>
    );
  }
);

interface MyButtonProps {
  count: number;
  onClick: () => void;
}

function MyButton({ count, onClick }: MyButtonProps) {
  console.log(
    "Only this component re-renders again and again while we change the data"
  );
  return <button onClick={onClick}>Clicked {count} times</button>;
}

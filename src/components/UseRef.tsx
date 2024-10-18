import React, { useRef, useState } from "react";

function UseRef() {
  const refElement = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("We are using Use Ref");

  console.log(refElement);

  function reset() {
    setInputValue('');
    if (refElement.current) {
      refElement.current.focus();
    }
  }

  function handleInput() {
    if (refElement.current) {
      refElement.current.style.color = 'blue';
    }
  }

  return (
    <div>
      <input
        type="text"
        ref={refElement}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={handleInput}>Handle Input</button>
    </div>
  );
}

export default UseRef;

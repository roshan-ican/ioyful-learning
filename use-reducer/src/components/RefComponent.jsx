import React, { useEffect, useRef, useState } from "react";
import Input from "./customInput";

function RefComponent() {
  const [input, setInput] = useState("");
  const count = useRef(1);
  const inputRef = useRef();

  useEffect(() => {
    count.current += 1;
  });
  const clickHanlder = () => {
    console.log(inputRef.current, "CURRENTREF");
    const value = inputRef.current.value;
    if (!value) inputRef.current.focus();
    else alert(value);
  };

  return (
    <>
      <div>
        <Input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={clickHanlder}>Submit</button>
        <hr />
        <div>you have rendered "{input}"</div>
        <div>Rendered {count.current}</div>
      </div>
    </>
  );
}

export default RefComponent;

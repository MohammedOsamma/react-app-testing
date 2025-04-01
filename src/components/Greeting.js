import { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function changeTextHandler() {
    setChangedText(true);
  }
  return (
    <div>
      <h2>Hello World</h2>
      {!changedText ? (
        <Output>It's nice to see you</Output>
      ) : (
        <Output>Changed!</Output>
      )}
      <button onClick={changeTextHandler}>Click to Change</button>
    </div>
  );
}

export default Greeting;

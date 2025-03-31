import { useState } from "react";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function changeTextHandler() {
    setChangedText(true);
  }
  return (
    <div>
      <h2>Hello World</h2>
      {!changedText ? <p>It's nice to see you</p> : <p>Changed!</p>}
      <button onClick={changeTextHandler}>Click to Change</button>
    </div>
  );
}

export default Greeting;

import React from "react";

const Output = (props) => {
  return <p>{props.children}</p>;
};

export default Output;

// If the component have more complex states
// should make that test in seperate file
// but if the component have less complex states don't make new file to test

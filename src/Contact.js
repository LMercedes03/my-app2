import React, { useRef } from "react";

export const Contact = () => {
  let refEmail = useRef(null);
  let refMessage = useRef(null);

  const handleClick = () => {
    console.log(refEmail.current.value);
    console.log(refMessage.current.value);
    refEmail.current.value = "";
    refMessage.current.value = "";
  };

  return (
    <div>
      <input ref={refEmail} placeholder="Email" />
      <br />
      <textarea ref={refMessage} placeholder="Message" />
      <br />
      <button onClick={() => handleClick()}>Submit</button>
    </div>
  );
};

import React, { useState, useEffect } from "react";

function Nav() {
    
    const [text, setText] = useState("Hello World");

    const changeText = () => {
        text === 'Hello World' ? setText('Goodbye') : setText('Hello World')
    }

  return (
    <div>
      <h1>{text}</h1>
      <button className="btn btn-primary" onClick={changeText}>
        Change Text
      </button>
    </div>
  );
}

export default Nav;

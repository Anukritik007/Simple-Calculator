import React from "react";
import "./Button.css";

const Button = ({ name, type, displayName, onClick }) => {
  return (
    <button onClick={() => onClick({ name: name, type: type })}>
      {displayName}
    </button>
  );
};

export default Button;

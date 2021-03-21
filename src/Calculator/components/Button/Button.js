import React from "react";
import "./Button.css";

const Button = ({ name, type, displayName, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick({ name: name, type: type })}
    >
      {displayName}
    </button>
  );
};

export default Button;

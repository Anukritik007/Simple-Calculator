import React from "react";

const Button = ({ name, displayName, onClick }) => {
  return <button onClick={() => onClick(name)}>{displayName}</button>;
};

export default Button;

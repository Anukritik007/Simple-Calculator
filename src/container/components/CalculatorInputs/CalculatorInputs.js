import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./CalculatorInputs.css";

const CalculatorInputs = ({ onClick }) => {
  return (
    <div className="calculatorInputs">
      <Button name="0-9" displayName="Digit" onClick={onClick} />
    </div>
  );
};

CalculatorInputs.propTypes = {
  onClick: PropTypes.func,
};

export default CalculatorInputs;

import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./CalculatorInputs.css";
import { calculatorButtons } from "./CalculatorInputs.constants";

const CalculatorInputs = ({ onClick }) => {
  return (
    <div className="calculatorInputs">
      {calculatorButtons.map((button, index) => {
        return (
          <Button
            key={index}
            name={button.name}
            type={button.type}
            displayName={button.displayName}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

CalculatorInputs.propTypes = {
  onClick: PropTypes.func,
};

export default CalculatorInputs;

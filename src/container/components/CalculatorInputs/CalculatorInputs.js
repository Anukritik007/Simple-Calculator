import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./CalculatorInputs.css";
import {
  calculatorButtons,
  scientificButtons,
} from "./CalculatorInputs.constants";

const CalculatorInputs = ({ onClick, showScientific }) => {
  return (
    <div className="calculatorInputs">
      <div className="normal-buttons ">
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
      <div className="scientific-buttons">
        {showScientific &&
          scientificButtons.map((button, index) => {
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
    </div>
  );
};

CalculatorInputs.propTypes = {
  onClick: PropTypes.func,
  showScientific: PropTypes.bool,
};

export default CalculatorInputs;

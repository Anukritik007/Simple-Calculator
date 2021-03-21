import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./CalculatorInputs.css";
import {
  calculatorButtons,
  scientificButtons,
} from "./CalculatorInputs.constants";

const CalculatorInputs = ({ onClick, showScientific, isThemeDark }) => {
  return (
    <div
      className={`calculatorInputs ${
        isThemeDark ? "theme-dark" : "theme-light"
      }`}
    >
      <div className="normal-buttons grid">
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
      <div className="scientific-buttons grid scientific-grid">
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

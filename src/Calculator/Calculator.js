import React, { useState } from "react";
import CalculatorDisplay from "./components/CalculatorDisplay/CalculatorDisplay";
import CalculatorInputs from "./components/CalculatorInputs/CalculatorInputs";
import Header from "./components/Header/Header";
import * as Utils from "./CalculatorUtils";
import themeContext from "./ThemeContext";
import "./Calculator.css";

const Calculator = () => {
  const [equation, setEquation] = useState({
    operand1: "",
    operator: "",
    operand2: "",
    result: 0,
  });
  const [showScientific, setMode] = useState(false);
  const [isThemeDark, setThemeDark] = useState(false);

  const themeContextValue = {
    isThemeDark,
    toggleTheme: () => setThemeDark(!isThemeDark),
  };
  const op1 = equation.operand1;
  const op2 = equation.operand2;
  const opr = equation.operator;

  /**
   * Triggers on Click of calculator buttons to evaluation the equation and show intermediate results
   * @param {*} button
   */
  const onClick = (button) => {
    if (button.type === "digit") {
      _handleDigit(button);
    } else if (button.type === "operator") {
      _handleOperator(button);
    } else if (button.type === "scientific_operator") {
      _handleScientificOperator(button);
    } else if (button.type === "equals") {
      _handleEquals(button);
    } else {
      //clear
      setEquation({
        operand1: "",
        operator: "",
        operand2: "",
        result: 0,
      });
    }
  };

  const _handleDigit = (button) => {
    //Reset operand 1 to clicked value in case of Unary operators(Scientific in our case)
    if (
      opr === "=" ||
      opr === "Sign" ||
      opr === "Square" ||
      opr === "Square root"
    ) {
      const newOp1 = button.name;
      setEquation({
        ...equation,
        operand1: newOp1,
        operator: "",
        result: newOp1,
      });
    }
    //set operand 1
    else if (opr === "") {
      const newOp1 = op1 + button.name;
      setEquation({ ...equation, operand1: newOp1, result: newOp1 });
    }
    //set operand 2
    else {
      const newOp2 = op2 + button.name;
      setEquation({ ...equation, operand2: newOp2, result: newOp2 });
    }
  };

  const _handleOperator = (button) => {
    //set binary operator only if operand 1 exists
    if (
      (op1 !== "" && opr === "") ||
      (op1 !== "" && opr !== "" && op2 === "") //overwrite operator if already present
    ) {
      setEquation({ ...equation, operator: button.name });
    }
    //return intermediate result
    else if (op1 !== "" && opr !== "" && op2 !== "") {
      let intermediateResult = Utils.evaluateEquation(equation);
      setEquation({
        operand1: intermediateResult,
        operator: button.name,
        operand2: "",
        result: intermediateResult,
      });
    }
  };

  const _handleScientificOperator = (button) => {
    //set the unary(scientific) operator
    const newEquation = { ...equation, operator: button.name };
    let intermediateResult = Utils.evaluateEquation(newEquation);

    setEquation({
      ...newEquation,
      operand1: intermediateResult,
      operand2: "",
      result: intermediateResult,
    });
  };

  const _handleEquals = () => {
    let intermediateResult = Utils.evaluateEquation(equation);
    setEquation({
      operand1: intermediateResult,
      operator: "=",
      operand2: "",
      result: intermediateResult,
    });
  };

  return (
    <themeContext.Provider value={themeContextValue}>
      <div
        className={`calculator ${isThemeDark ? "theme-dark" : "theme-light"}`}
      >
        <Header
          showScientific={showScientific}
          toggleMode={() => setMode(!showScientific)}
        />
        <CalculatorDisplay result={equation.result} />

        <CalculatorInputs onClick={onClick} showScientific={showScientific} />
      </div>
    </themeContext.Provider>
  );
};

export default Calculator;

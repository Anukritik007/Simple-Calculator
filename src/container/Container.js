import React, { useState } from "react";
import CalculatorDisplay from "./components/CalculatorDisplay/CalculatorDisplay";
import CalculatorInputs from "./components/CalculatorInputs/CalculatorInputs";
import Header from "./components/Header/Header";
import * as Utils from "./Container.utils";

const Container = () => {
  const [equation, setEquation] = useState({
    operand1: "",
    operator: "",
    operand2: "",
    result: 0,
  });
  const [showScientific, setMode] = useState(false);

  const op1 = equation.operand1;
  const op2 = equation.operand2;
  const opr = equation.operator;

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
    if (opr === "=") {
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
    //set operator only given if operand 1 exists
    if (
      (op1 !== "" && opr === "") ||
      (op1 !== "" && opr !== "" && op2 === "") //overwrite operator, continue calc after =
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
    <div className="container">
      <Header
        showScientific={showScientific}
        toggleMode={() => setMode(!showScientific)}
      />
      <CalculatorDisplay result={equation.result} />

      <CalculatorInputs onClick={onClick} showScientific={showScientific} />
    </div>
  );
};

export default Container;

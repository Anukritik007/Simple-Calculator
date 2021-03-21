import React from "react";
import CalculatorDisplay from "./components/CalculatorDisplay/CalculatorDisplay";
import CalculatorInputs from "./components/CalculatorInputs/CalculatorInputs";
import Header from "./components/Header/Header";

const Container = () => {
  const result = 0;

  const onClick = () => {
    console.log("Button clicked");
  };
  return (
    <div className="container">
      <Header />
      <CalculatorDisplay result={result} />

      <CalculatorInputs onClick={onClick} />
    </div>
  );
};

export default Container;

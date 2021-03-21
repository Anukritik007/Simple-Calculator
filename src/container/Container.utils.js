export const evaluateEquation = (equation) => {
  const { operand1, operator, operand2, result } = equation;
  let res = 0;
  const op1 = Number(operand1),
    op2 = Number(operand2);
  switch (operator) {
    case "Add":
      res = op1 + op2;
      break;
    case "Subtract":
      res = op1 - op2;
      break;
    case "Multiply":
      res = op1 * op2;
      break;
    case "Divide":
      res = op1 / op2;
      break;
    case "Sign":
      res = result * -1;
      break;
    case "Square":
      res = Math.pow(result, 2);
      break;
    case "Square root":
      res = Math.sqrt(result);
      break;
    default:
      res = 0;
  }
  return res;
};

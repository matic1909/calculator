function operate(operator, a, b) {
  switch(operator) {
    case "plus":
      return a + b;
      break;
    case "minus":
      return a - b;
      break;
    case "times":
      return a * b;
      break;
    case "divide":
      return a / b;
      break;
    default:
      console.log("No valid operation provided");
  }
}
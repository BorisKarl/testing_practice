function makeCalc() {
  const calculator = {
    sum: function (a, b) {
      return a + b;
    },
    sub: function (a, b) {
      return a - b;
    },
    mul: function (a, b) {
      return a * b;
    },

    div: function (a, b) {
      return a / b;
    },
  };
  return calculator;
}

const calculator = makeCalc();
// const result = calculator.sum(3,4);

// console.log(result);

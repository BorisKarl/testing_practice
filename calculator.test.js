function makeCalc() {
    const calculator = {
        sum: function(a, b) {
        return a + b;
        },
        sub: function(a,b) {
            return a - b;
        },
        mul: function(a,b) {
            return a * b;
        },

        div: function(a,b) {
            return a / b;
        }
    };
  return calculator;
};


const calculator = makeCalc();
// const result = calculator.sum(3,4);

// console.log(result);

test("calculate a number", () => {
  expect(calculator.sum(3,4)).toBe(7);
});

test("sub a number", () => {
  expect(calculator.sub(4, 3)).toBe(1);
});

test("mul  a number", () => {
    expect(calculator.mul(2, 4)).toBe(8);
});

test("div a number", () => {
  expect(calculator.div(10, 5)).toBe(2);
});


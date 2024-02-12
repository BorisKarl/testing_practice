const reverseString = require("../src/reverseString");

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

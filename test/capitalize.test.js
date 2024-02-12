const capitalize = require('../src/capizalize');



test("capitalizes a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

// const capitalize = require('./capitalize');

const capitalize = (string) => {
  return string[0].toUpperCase() + string.substring(1);
};

test("capitalizes a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

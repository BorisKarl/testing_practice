const caesarCipher = require("../src/caesarCipher");

test("decode a string", () => {
  expect(caesarCipher("hello", 2)).toBe("jgnnq");
});


test("decode a string, check with Uppercase", () => {
  expect(caesarCipher("HeLlo", 2)).toBe("JgNnq");
});

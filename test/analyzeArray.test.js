const analizeArray = require('../src/analyzeArray');


test("analyze a array", () => {
  expect(analizeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});


test("analyze a array no 2", () => {
  expect(analizeArray([3, 2, 3, 4, 5, 1, 1])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 7,
  });
});

const analizeArray = (array) => {
  const length = array.length;
  let max = 0;
  let min = array[0];
  let averageSum = 0;
  let ave = 0;
  array.forEach((element) => {
    if (element > max) {
        max = element;
    }
   if ( element <= min ) {
    min = element;
   }
    averageSum += element;
  });
    ave = Math.round(averageSum / length);
  const object = {
    average: ave,
    min: min,
    max: max,
    length: length,
  };

  return object;
};

const result = analizeArray([3, 2, 3, 4, 5, 1, 1]);

console.log(result);

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

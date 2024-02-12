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
    if (element <= min) {
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

module.exports = analizeArray;


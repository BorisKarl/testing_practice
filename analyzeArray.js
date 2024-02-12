const analizeArray = (array) => {
  const length = array.length;
  let max = 0;
  array.forEach((element) => {
    element > max;
    max = element;
  });
 
      const object =
      {
        //average: ave,
        //min: min,
        max: max,
        length: length
      }

      return object
};

const result = analizeArray([1,2,3,45]);

console.log(result);

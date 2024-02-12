const caesarCipher = (string, num) => {
  let arrayFromString = string.split(""); 
  let charCodeArray = [];
  arrayFromString.forEach((e) => {
    if (e.charCodeAt() >= 65 && e.charCodeAt() <= 90) {
        charCodeArray.push((e.charCodeAt() - 65 + num) % 26 + 65);
    } else if ( e.charCodeAt() >= 97 && e.charCodeAt() <= 122 )
    {
        charCodeArray.push((e.charCodeAt() - 97 + num) % 26 + 97);
    } else {
        charCodeArray.push(e.charCodeAt());
    }
      });
  let codedString = String.fromCharCode(...charCodeArray);
  return codedString;
};

caesarCipher("hello", 2);

test("decode a string", () => {
  expect(caesarCipher("hello", 2)).toBe("jgnnq");
});


test("decode a string, check with Uppercase", () => {
  expect(caesarCipher("HeLlo", 2)).toBe("JgNnq");
});

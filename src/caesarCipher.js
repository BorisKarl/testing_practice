const caesarCipher = (string, num) => {
  let arrayFromString = string.split("");
  let charCodeArray = [];
  arrayFromString.forEach((e) => {
    if (e.charCodeAt() >= 65 && e.charCodeAt() <= 90) {
      charCodeArray.push(((e.charCodeAt() - 65 + num) % 26) + 65);
    } else if (e.charCodeAt() >= 97 && e.charCodeAt() <= 122) {
      charCodeArray.push(((e.charCodeAt() - 97 + num) % 26) + 97);
    } else {
      charCodeArray.push(e.charCodeAt());
    }
  });
  let codedString = String.fromCharCode(...charCodeArray);
  return codedString;
};

module.exports = caesarCipher;

const capitalize = (string) => {
    return string[0].toUpperCase() + string.substring(1);
}

const result = capitalize("moin");

console.log(result);

module.exports = capitalize;

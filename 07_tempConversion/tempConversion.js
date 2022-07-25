const ftoc = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return Number(celsius.toFixed(1));
}

const ctof = function(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return Number(fahrenheit.toFixed(1));
};

/*
const ftoc = function(f) {
 return Math.round((f - 32) * (5/9) * 10) / 10;
};

const ctof = function(c) {
  return Math.round(((c * 9/5) + 32) * 10) / 10;
};
*/

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

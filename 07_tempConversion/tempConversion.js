const ftoc = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return Number(celsius.toFixed(1));
}

const ctof = function(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let total = 0;
	for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  let total = array[0];
  for (let i = 1; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
  if (num <= 1) {
    return 1;
  }
  
  let total = num;
  for (let i = num - 1; i > 1; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

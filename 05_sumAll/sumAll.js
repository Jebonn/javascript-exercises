const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    const largerNum = Math.max(num1, num2);
    const smallerNum = Math.min(num1, num2);
    let total = 0;

    for (let i = smallerNum; i <= largerNum; i++){
        total += i;
    }
    return total;
};

/*
const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};
*/

// Do not edit below this line
module.exports = sumAll;

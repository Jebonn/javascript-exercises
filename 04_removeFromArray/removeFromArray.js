const removeFromArray = function() {
    firstArray = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        for (let j = firstArray.length - 1; j >= 0; j--) {
            if (firstArray[j] === arguments[i]) {
                firstArray.splice(j,1);
            }
        }
    }
    return firstArray;
};

/*
// SOLUTION 1 (using forEach())
const removeFromArray = function (...args) {
  const array = args[0];
  const newArray = [];
  
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// SOLUTION 2 (Using filter())
var removeFromArray = function(...args) {
  const array = args[0]
  return array.filter(val => !args.includes(val))
}
*/

// Do not edit below this line
module.exports = removeFromArray;

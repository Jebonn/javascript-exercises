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

// Do not edit below this line
module.exports = removeFromArray;

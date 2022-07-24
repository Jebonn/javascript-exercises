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

// Do not edit below this line
module.exports = sumAll;

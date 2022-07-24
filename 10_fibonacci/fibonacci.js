const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) {
        return "OOPS";
    }

    let first_num = 1;
    let last_num = 1;
    let temp_num = 0;

    while (num > 2) {
        temp_num = first_num + last_num;
        first_num = last_num;
        last_num = temp_num;
        num--;
    }
    return last_num;
};

// Do not edit below this line
module.exports = fibonacci;

const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    }
    final_str = ''; 
    for(let i = 0; i < num; i++) {
        final_str += str;
    }
    return final_str;
};

// Do not edit below this line
module.exports = repeatString;

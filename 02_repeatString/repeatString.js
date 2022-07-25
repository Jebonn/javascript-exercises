const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    }
    let final_str = ''; 
    for (let i = 0; i < num; i++) {
        final_str += str;
    }
    return final_str;
};

/*
const repeatString = function(word, times) {
  if (times < 0) return 'ERROR';
  let string = '';
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};
*/

// Do not edit below this line
module.exports = repeatString;

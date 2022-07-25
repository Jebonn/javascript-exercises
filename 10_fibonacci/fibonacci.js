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

/*
const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};
*/

// Do not edit below this line
module.exports = fibonacci;

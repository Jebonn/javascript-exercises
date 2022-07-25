const palindromes = function (str) {
    new_str = str.toLowerCase().replace(/[^a-z]/g, '');
    flipped_str = new_str.split("").reverse().join("");

    if (new_str === flipped_str) {
        return true;
    } else {
        return false;
    }
};

/*
const palindromes = function(string) {
  processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};
*/

// Do not edit below this line
module.exports = palindromes;

const caesar = function(str, num) {
    let upAlphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 65)); //uppercase alphabet array
    let lowAlphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97)); //lowercase alphabet array
    let cipher = '';

    for (let i = 0; i < str.length; i++) {
        if (upAlphabet.includes(str[i])) {
            const index = upAlphabet.indexOf(str[i]);
            cipher += upAlphabet.at((index + num) % 26);

        } else if (lowAlphabet.includes(str[i])) {
            const index = lowAlphabet.indexOf(str[i]);
            cipher += lowAlphabet.at((index + num) % 26);
            
        } else {
            cipher += str[i];
        }
    }
    return cipher;
};

/*
const caesar = function(string, shift) {
  return string
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);

// this function is just a fancy way of doing % so that it works with negative numbers
// see this link for details:
// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};
*/

// Do not edit below this line
module.exports = caesar;

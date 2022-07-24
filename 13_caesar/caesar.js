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

// Do not edit below this line
module.exports = caesar;

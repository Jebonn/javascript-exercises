const getTheTitles = function(bookArr) {
    let titles = [];
    for (let i = 0; i < bookArr.length; i++) {
        titles.push(bookArr[i].title);
    }
    return titles;
};

/*
const getTheTitles = function(array) {
  return array.map(book => book.title);
};
*/

// Do not edit below this line
module.exports = getTheTitles;

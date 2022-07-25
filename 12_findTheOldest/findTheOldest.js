const findTheOldest = function(people) {
    let oldestPerson;
    let oldestAge = 0;
    const currentYear = new Date().getFullYear();

    for (let i = 0; i < people.length; i++) {
        if (!people[i].hasOwnProperty('yearOfDeath')) {
            people[i].yearOfDeath = currentYear;
        }
        if (people[i].yearOfDeath - people[i].yearOfBirth > oldestAge) {
            oldestPerson = people[i];
            oldestAge = people[i].yearOfDeath - people[i].yearOfBirth;
        }
    }
    return oldestPerson;
};

/*
const findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
  })
};

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};
*/

// Do not edit below this line
module.exports = findTheOldest;

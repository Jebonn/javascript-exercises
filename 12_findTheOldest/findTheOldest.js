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

// Do not edit below this line
module.exports = findTheOldest;

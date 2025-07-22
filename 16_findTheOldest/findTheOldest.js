const findTheOldest = function(people) {
return people.reduce((oldest, person) => {
    const currentYear = new Date().getFullYear();
    let currentAge;
    if (!person.yearOfDeath) { 
      currentAge = currentYear - person.yearOfBirth;
    } else {
      currentAge = person.yearOfDeath - person.yearOfBirth;
    }
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    return currentAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;

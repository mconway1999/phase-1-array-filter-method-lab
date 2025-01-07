// Code your solution here

function findMatching(drivers, nameToMatch) {
    return drivers.filter(driver => driver.toLowerCase() === nameToMatch.toLowerCase());
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }

function matchName(drivers, nameToMatch){
    return drivers.filter(driver => driver.name === nameToMatch)
}
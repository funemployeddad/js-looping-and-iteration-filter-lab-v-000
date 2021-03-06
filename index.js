// Code your solution in this file
//pass in a list, which is an array, and name, which will be the search parameter you are looking for within the list

// use the filter funtion , passing in the driverName function, which you will have to then define below and return the result of so that your function (driverName) has a value and doesn't get a NULL

// you want to provide a consistent argument to function driverName, so do that controlling for user entry error by taking the name argument given, and returning it in all lowercase. this gives a consistent argument to  function driverName

function findMatching(drivers, name) {
  return drivers.filter(function (driverName){
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

//have to create a new variable that is used to slice off the right number of letters from the name stored in the list so that it can be compared to see if it matches
function fuzzyMatch(drivers, letters) {
  let lengthOfName = letters.length;    //can do this because a string is just an array of characters
  return drivers.filter( function (searchLetters){
    return searchLetters.slice(0, lengthOfName) === letters;
  });
}


function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}

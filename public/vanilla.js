/*
  This function should accept an array of strings as a parameter.
  It should return the array, with all strings coverted to uppercase.

  It should not use underscore.
*/
var uppercase = function(array){

  var newArray = array.map(function up(value, index){ value = value.toUpperCase(); return value; });
  return newArray;
}

/*
  This function should accept an array of numbers as a parameter.
  It should return the array, with all numbers sorted in descending order.

  It should not use underscore.
*/
var sort = function(array){

newArray = array.sort().reverse();

return newArray;

}

/*
  This function should accept an array of objects as a parameter.
  It should return an array of objects that contain the property "name".
*/
var namesOnly = function(array) {

  newArray = [];

  var containName = function(value, index) {

      if ((value.hasOwnProperty("name"))) {
                  console.log("in if, value = ", value);

        newArray.push(value);

        console.log("newArray = ", newArray);

      }

  }

  newArray = array.filter(containName);
  return newArray;

}

/*
  This function should accept an array of numbers as a parameter.
  It should return the first number that is evenly divisible by 5.
*/
var firstFive = function(array) {

  newArray = [];
  rArray = [];
  rArray = array.reverse();

  var divByFive = function(memory, value, index) {
      if (value % 5 === 0) {
        memory = value;
      }

        return memory;
  }

newArray = rArray.reduce(divByFive, 0);
return newArray;


}

/*
  This function should accept an array of numbers a parameter.
  It should return the sum of all ODD numbers in the array.
    (Ignore the even numbers.)
*/
var sumOdd = function(array) {

    oddArray = [];
    newArray = [];

    var sum = function(memory, value, index) {
    return memory + value;
    }

    var odds = function(value, index) {
    return (value % 2 == 1);
    }

    oddArray = array.filter(odds);

    newArray = oddArray.reduce(sum, 0);

    return newArray;

}












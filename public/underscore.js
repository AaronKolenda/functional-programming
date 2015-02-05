/*
  This function should accept an array of strings as a parameter.
  It should return the array, with all strings coverted to uppercase.

  It SHOULD use underscore.
*/
var underscoreUppercase = function(array){

    return _.map(array, function(word){ return word.toUpperCase(); });

}

/*
  This function should accept an array of numbers as a parameter.
  It should return the array, with all numbers sorted in descending order.

  It SHOULD use underscore.
*/
var underscoreSort = function(array){

  return _.sortBy(array, function(i){ return -i; });


}

/*
  This function should accept an array of objects as a parameter.
  It should return an array of objects that contain the property "name".

  It SHOULD use underscore.
*/
var underscoreNamesOnly = function(array) {

  var newArray = [];

    _.map(array, function(obj){
      if (_.has(obj, "name")) {
        newArray.push(obj);
      }
    });

return newArray;

}

/*
  This function should accept an array of numbers as a parameter.
  It should return the first number that is evenly divisible by 5.

  It SHOULD use underscore.
*/
var underscoreFirstFive = function(array) {


  return _.find(array, function(num){ return (num % 5 == 0); });


}

/*
  This function should accept an array of numbers a parameter.
  It should return the sum of all ODD numbers in the array.
    (Ignore the even numbers.)

  It SHOULD use underscore.
*/
var underscoreSumOdd = function(array) {

  var odds = [];
  odds = _.filter(array, function(num){ return num % 2 !== 0; });

  var sum = _.reduce(odds, function(memo, num){ return memo + num; }, 0);

  return sum;
}

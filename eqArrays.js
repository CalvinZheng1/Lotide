// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

  const eqArrays = function(array1, array2) {
    let result = true;
    if (array1.length !== array2.length) {
      result = false;
    } 
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        result = false;
      }
    }
    return result;
  }


module.exports = eqArrays;
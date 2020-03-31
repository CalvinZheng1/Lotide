// FUNCTION IMPLEMENTATION
let head =  function(array, n) {
  if (array == null) 
  return void 0;
if (n == null) 
  return array[0];
if (n < 0)
  return [];
return array.slice(0, n);
};
const assertEqual = function(actual, expected) {
if (actual === expected) {
console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
} else {
console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
}
}
// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")
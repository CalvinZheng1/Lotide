const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let countLetters = function (strArray) {
  const results = {};
   for (let char of strArray) {
   if (char !== '') {
    if  (results[char]) {
        results[char] += 1;
      } else {
       results[char] = 1;
      }
    }
  } return results  
};
countLetters("lighthouse in the house")
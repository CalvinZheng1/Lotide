const assertArraysEqual = function(array1, array2) {
  let resultOne = 0, resultTwo = 0;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      resultOne += array1[i];
      resultTwo += array2[i];
    }
  } else {
    return (console.log('🛑🛑🛑 ' + array1 + ' !== ' + array2));

  }
  if (resultOne === resultTwo) {
    console.log('✅✅✅ ' + array1 + ' === ' + array2);
  } else {
    console.log('🛑🛑🛑 ' + array1 + ' !== ' + array2);
  }
};

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      break;
    }
  }
  return newArray;
}




// Tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // Pass
assertArraysEqual(results1, [ 1, 2, 5, 7, 2, -1 ]); // Fail
assertArraysEqual(results1, [ 1, 2, 4, 7, 2 ]); // Fail

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // Pass
assertArraysEqual(results2, [ 'I\'ve', 'never', 'been', 'to', 'Hollywood' ]); // Fail
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Montreal' ]); // Fail 

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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// Tests
const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["ground", "control", "to", "major", "tom", "bowie"];
const words3 = ["ground", "control", "to", "major", "bob"];

assertArraysEqual(map(words1, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words2, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words3, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]); 


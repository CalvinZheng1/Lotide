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
const without = function(array,excArr) {
  let resultArray = [];
  for (let index in array) {
    if (array[index] !== excArr[0]) {
      resultArray.push(array[index]);
    }
  } return resultArray;
};



without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

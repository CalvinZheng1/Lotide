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

const flatten = function (array) {
  let result= 0;
  for (let index in array) {
    if (Array.isArray(array[index])) {
      for (let index2 in arr[index]){
        result.push(array[index][index2])
      }
    } else {
    result.push(array[index]);
    }
  } return result;
};

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
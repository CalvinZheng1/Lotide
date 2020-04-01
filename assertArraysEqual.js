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
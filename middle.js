
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
      let firstHalf = array[Math.floor(array.length / 2) -1];
      let secondHalf = array[Math.floor(array.length / 2)];
        return [firstHalf, secondHalf];
  } else {
    let middle = array[Math.floor(array.length / 2)];
    return [middle]
  }
};

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
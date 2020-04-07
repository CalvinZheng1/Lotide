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

module.exports = middle;
// FUNCTION IMPLEMENTATION

const head =  function(array, n) {
  if (array == null) 
  return void 0;
if (n == null) 
  return array[0];
if (n < 0)
  return [];
return array.slice(0, n);
};


module.exports = head;
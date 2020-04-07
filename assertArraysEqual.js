const eqArrays = require("./eqArrays")


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) { 
    console.log(`✅✅✅ Arrays actual == expected`)
  } else {
    console.log(`🛑🛑🛑Arrays actual !== expected`)
  }

}
module.exports = assertArraysEqual;
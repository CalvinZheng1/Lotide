const assertArraysEqual = require('../assertArraysEqual')
const eqArrays = require('../eqArrays')

assertArraysEqual(eqArrays(["hey", "hi", "hello"], ["hey", "hi", "hello"]));
assertArraysEqual(eqArrays(["hey", "hi", "bye"], ["hey", "hi", "hello"]));
const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual(["hey", "hi", "hello"], ["hey", "hi", "hello"]);
assertArraysEqual(["hey", "hi", "bye"], ["hey", "hi", "hello"]);
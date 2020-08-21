const Test = require('../../test/test');
const theLift = require('../theLift');

queue = [
    [],
    [],
    [4,4,4,4,  4,4,4,4],
    [],
    [2,2,2,2,  2,2,2,2],
]


Test.assertEquals(theLift(0,4), [0, 2, 4, 2, 4, 2, 0]);
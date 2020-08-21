const Test = require('../../test/test');
const theLift = require('../theLift');

let queues = [
    [ 3 ], // 0
    [ 2 ], // 1
    [ 0 ], // 2
    [ 2 ], // 3
    [],    // 4
    [],    // 5
    [ 5 ]  // 6
]

Test.assertEquals(theLift(queues, 5), [0, 1, 2, 3, 6, 5, 3, 2, 0]);
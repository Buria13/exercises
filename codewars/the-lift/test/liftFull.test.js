const Test = require('../../test/test');
const theLift = require('../theLift');

let queues = [ [ 3, 3, 3, 3, 3, 3 ], [], [], [], [], [], [] ]

Test.assertEquals(theLift(queues, 5), [0, 1, 3, 1, 3, 0]);
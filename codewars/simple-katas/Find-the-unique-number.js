const Test = require('../test/test');

function findUniq(arr) {
    const n = arr[0] === arr[1] ? arr[0] : arr[2];
    return arr.find(el => el !== n);
}

Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);
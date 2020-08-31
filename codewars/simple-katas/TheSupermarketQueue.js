const Test = require('../test/test');

function queueTime(customers, n) {
    const tills = Array(n).fill(0);

    while(customers.length) {
        tills[0] += customers.shift();
        tills.sort((a, b) => a - b);
    }

    return tills[tills.length - 1];
}

Test.assertEquals(queueTime([], 1), 0);
Test.assertEquals(queueTime([2,3, 10], 2), 12);
Test.assertEquals(queueTime([1,2,3,4], 1), 10);
Test.assertEquals(queueTime([2,2,3,3,4,4], 2), 9);
Test.assertEquals(queueTime([1,2,3,4,5], 100), 5);

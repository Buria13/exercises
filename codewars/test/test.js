const _ = require('lodash');


class Test  {
    static assertDeepEquals(actual, expected) {
        _.isEqual(actual, expected) ?
        console.log('Test passed.') :
        console.log(`Test failed!! ||  expected: ${expected} ' actual: ${actual}`);
    }

    static assertEquals(actual, expected) {
        _.isEqual(actual, expected) ?
        console.log('Test passed.') :
        console.log(`Test failed!! ||  expected: ${expected} ' actual: ${actual}`);
    }


}

module.exports = Test;
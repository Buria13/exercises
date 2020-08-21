const Test = require('../test/test');

function race(v1, v2, g) {
    let time = g / (v2 - v1);
    return v2 > v1 ? [Math.floor(time), Math.floor(time*60%60), Math.floor(time*3600%60)] : null;
}


Test.assertEquals(race(720, 850, 70), [0, 32, 18])
Test.assertEquals(race(80, 91, 37), [3, 21, 49])
Test.assertEquals(race(80, 100, 40), [2, 0, 0])

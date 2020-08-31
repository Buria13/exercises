const Test = require('../test/test');

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    .forEach(function (name, i) {
        return this[name] = fn => fn ? fn(i) : i;
    });


function plus(a) {
    return b => a + b;
}
function minus(a) {
    return b => b - a;
}
function times(a) {
    return b => a * b;
}
function dividedBy(a) {
    return b => Math.floor(b / a);
}

Test.assertEquals(seven(times(five())), 35);
Test.assertEquals(four(plus(nine())), 13);
Test.assertEquals(eight(minus(three())), 5);
Test.assertEquals(six(dividedBy(two())), 3);
const Test = require('../test/test');

function bouncingBall(h,  bounce,  window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

    let result = 1;
    h *= bounce;

    while (window < h) {
        h *= bounce;
        result += 2;
    }

    return result;
}


describe("Tests", function(){
    it ("test1", function(){
        Test.assertEquals(bouncingBall(3.0, 0.66, 1.5), 3);
    });

    it ("test2", function(){
        Test.assertEquals(bouncingBall(30.0, 0.66, 1.5), 15);
    });

});
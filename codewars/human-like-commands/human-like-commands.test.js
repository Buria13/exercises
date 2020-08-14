const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

const interpret = require('./interpret')

const check=(msg, items, exp)=>{
    let assertMsg = `"${msg}" on: [${ items }]`;
    let actual = interpret(items,msg);
    assert.deepEqual(actual, exp, assertMsg);
}

describe("Fixed Tests", function() {

    const batchTests=(...batch)=>batch.forEach( ([msg,exp]) => check(msg,[1,2,3,4,5,6,7,8,9,10],exp) );

    it("Map Tests", function() {
        batchTests(
            ['Map the array with plus 5 then multiply by 6',  [36,42,48,54,60,66,72,78,84,90]],
            ['Map the array with plus 143 then minus 6 then divide by -2', [-69,-69.5,-70,-70.5,-71,-71.5,-72,-72.5,-73,-73.5]],
            ['Map the array with plus 5 then multiply by 6 then divide by 6 then minus 5', [1,2,3,4,5,6,7,8,9,10]],
            ['Map the array with plus 500 then divide by 5', [100.2,100.4,100.6,100.8,101,101.2,101.4,101.6,101.8,102]],
            ['Map the array with multiply by 2 then multiply by 5 then divide by 5 then minus 5', [-3,-1,1,3,5,7,9,11,13,15]],
        );
    });

    it("Filter Tests", function() {
        batchTests(
            ['Filter and return if greater than 5', [6,7,8,9,10]],
            ['Filter the array and return if modulo 2 equals 0', [2,4,6,8,10]],
            ['Filter the array and return if modulo 2 equals 0 and return if not equals 6', [2,4,8,10]],
            ['Filter the array and return if modulo 2 equals 0 and return if equals 6', [6]],
            ['Filter the array and return if modulo 1 equals 0 and return if greater than 2', [3,4,5,6,7,8,9,10]],
            ['Filter the array and return if modulo 1 equals 0 and return if lesser than 6', [1,2,3,4,5]],
            ['Filter and return if lesser than 0 or greater than 0 and greater than 40', []],
        );
    });

    it("Reduce Tests", function() {
        batchTests(
            ['Reduce the array with plus', 55],
            ['Reduce the array with minus', -53],
            ['Reduce the array with multiply by', 3628800],
            ['Reduce the array with divide by', 2.7557319223985894e-7],
        );
    });

    it("Filter Tests: operators precedence and complex relations", function() {
        batchTests(
            ['Filter the array and return if not greater than 5', [1,2,3,4,5]],
            ['Filter the array and return if not greater than 4 or greater than 5', [1,2,3,4,6,7,8,9,10]],
            ['Filter the array and return if not greater than 3 or not lesser than 8', [1,2,3,8,9,10]],
            ["Filter the array and return if not equals 12 or return if greater than -23 or return if greater than 26", [1,2,3,4,5,6,7,8,9,10]],
        );
    });

    it("Mixed Expressions Tests", function() {
        batchTests(
            ['Map the array with plus 5 then multiply by 2 then filter and return if modulo 4 equals 0', [12,16,20,24,28]],
            ['Filter the array and return if modulo 3 equals 1 then map with multiply by 3', [3,12,21,30]],
            //['Filter the array and return if modulo 3 not equals 1 then reduce with plus', 33],
            ['Filter the array and return if modulo 3 equals 0 and modulo 2 equals 0 then map with divide by 6', [1]],
            ['Map the array with divide by 2 then filter and return if modulo 1 equals 0 then map with multiply by 2 then plus 3 then minus 3 then reduce with multiply by', 3840],
        );
    });
});
const solution = require('./solution');
const oldSolution = require('./oldSolution');
const newTry = require('./newTry');

const REPETITIONS = 100_000;
const SIZE = 120;

let startTime;

startTime = Date.now();
for (let i = 0; i < REPETITIONS; i++) {
    let arr = [...Array(SIZE).keys()];
    newTry(arr);
}
console.log((Date.now() - startTime) / 1000);

startTime = Date.now();
for (let i = 0; i < REPETITIONS; i++) {
    let arr = [...Array(SIZE).keys()];
    oldSolution(arr);
}
console.log((Date.now() - startTime) / 1000);

startTime = Date.now();
for (let i = 0; i < REPETITIONS; i++) {
    let arr = [...Array(size).keys()];
    solution(arr);
}
console.log((Date.now() - startTime) / 1000);

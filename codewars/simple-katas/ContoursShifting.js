function contoursShifting(matrix) {
    return [1, 2, 3]
}


const Test = require('../test/test');
const matrix = [
        [ 1, 2, 3, 4],
        [ 5, 6, 7, 8],
        [ 9,10,11,12],
        [13,14,15,16],
        [17,18,19,20]],
    expected = [
        [ 5,  1, 2,3],
        [ 9,  7,11,4],
        [13, 6,15,8],
        [17,10,14,12],
        [18,19,20,16]]

console.log(contoursShifting(matrix));
//Test.assertDeepEquals(contoursShifting(matrix),expected)
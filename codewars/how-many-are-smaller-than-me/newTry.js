function smaller(arr) {
    const result = [];
    const  map = arr.map((value, i) => ({i: i, value: value}));

    map.sort((a, b) => b.value - a.value || b.i - a.i);

    for (let {i, value} of map) {
        const lastIndex = arr.lastIndexOf(value);
        result[i] = arr.length - lastIndex - 1;
        arr.splice(lastIndex, 1);
    }

    return result;
}

console.log(smaller([5, 4, 7, 9, 2, 4, 7, 4, 5, 6])); // [4, 1, 5, 6, 0, 3, 0, 0, 0]

// Map(9) {
//         4 => 2,  0
//         1 => 4,  1
//         5 => 4,  0
//         6 => 4,  0
//         0 => 5,  4
//         7 => 5,  0
//         8 => 6,  0
//         2 => 7,  5
//         3 => 9,  5
//         length = 9;
// }

module.exports = smaller;
const arr = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [8, 9, 0, 1, 2, 3, 4, 5],
];

let s = [
    [8, 0, 1, 2, 3, 4, 5, 6],
    [9, 0, 1, 2,3, 4, 5, 7]
]

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
];

// matrix = [
//     [1, 2, 3, 4],
//     [2, 6, 7, 5],
//     [1, 0, 1, 6],
//     [0, 9, 8, 7]
// ];

res = [
    [ 2, 1, 2, 3 ],
    [ 1, 6, 7, 4 ],
    [ 0, 0, 1, 5 ],
    [ 9, 8, 7, 6 ]
]

Array.prototype.turn = function () {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        let d = this[i].length;
        let diff = this.length - this[i].length;
        for (let j = 0; j < d; j++) {
            if (!result[j]) result[j] = [];
            result[j][d - i - 1 + diff] = this[i][j];
        }
    }
    return result;
}

function moveContour(arr) {
    console.log(arr);
    const tempElements = arr[0].slice(-2);

    for (let i = 0; i < 4; i++) {
        arr[0] = [, ...arr[0].slice(0, -1)]
        arr = arr.turn();
    }
    arr[0][arr[0].length - 1] = tempElements[0];
    arr[1][arr[1].length - 1] = tempElements[1];
    return arr;
}

 console.log(moveContour(matrix));


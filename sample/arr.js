let arr = Array.from(Array(10), (_, i) => 2 ** i);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.filter(x => x > 0 || (x > -26 && x > 26)));
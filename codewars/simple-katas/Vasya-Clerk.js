function tickets(line) {
    let [$25, $50] = [0, 0];

    return line.every(b => {
        b === 100 ? (($50 ? $50-- : $25 -= 2), $25--) :
        b === 50 ? ($50++, $25--) : $25++;
        return $25 >= 0 && $50 >=0;
    }) ? 'YES' : 'NO';
}

console.log(tickets([25, 25, 50]));
console.log(tickets([25, 25, 50, 50, 100]));


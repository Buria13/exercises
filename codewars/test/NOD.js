function NOD (x, y) {
        while (x && y) {
            x > y ? x %= y : y %= x;
        }

    return x + y;
}

console.log([
    NOD( 7, 15 ),
    NOD( 111, 555),
    NOD( 100, 200),
].join( '\n' ));
let range = {
    from: 1,
    to: 10,

    *[Symbol.iterator]() {
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};

console.log([...range]);


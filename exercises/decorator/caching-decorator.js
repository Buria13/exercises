function slow(x) {
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(fn) {
    const cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        const result = fn(x);
        cache.set(x, result);

        return result;
    };
}

slow = cachingDecorator(slow);

console.log(slow(1));
console.log(slow(1));
console.log(slow(2));
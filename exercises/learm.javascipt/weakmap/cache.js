// let cache = new Map();
let cache = new WeakMap();

function process(obj) {
    if (!cache.has(obj)) {
        let result = obj;
        cache.set(obj, result);
    }

    return cache.get(obj);
}

let obj = {};

let result = process(obj);

let result2 = process(obj);

obj = null;

// console.log(cache.size);
// function delay(fn, ms) {
//     return function () {
//         setTimeout(() => fn.apply(this, arguments), ms)
//     }
// }

function delay(fn, ms) {
    return new Proxy(fn, {
        apply(target, thisArg, args) {
            setTimeout(() => target.apply(thisArg, args), ms);
        }
    });
}

function sayHi(name) {
    console.log(`Hello, ${name}`);
}

console.log(sayHi.length); // 1

sayHi = delay(sayHi, 3000);

console.log(sayHi.length); // 0 / 1 with proxy

sayHi('Buria');
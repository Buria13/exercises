function doSomething(name) {
    console.log(`Hello, ${name}`);
}

function decorator(fn) {
    return function () {
        console.log('Starting...');
        const result = fn.apply(this, arguments);
        console.log('Finishing!');
        return result;
    }
}

doSomething('Buria');

const wrapped = decorator(doSomething);
wrapped('Buria');



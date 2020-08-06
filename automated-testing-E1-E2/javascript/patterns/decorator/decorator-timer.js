function f(n) {
    return (n > 2) ? f(n - 1) + f(n - 2) : 1;
}

let timers = {};

f = timerDecorator(f, 'f');

f(11);
f(23);
f(3);

console.log(timers);

function timerDecorator(fn, timer) {
    return function () {
        const result = fn.apply(this, arguments);
        const start = Date.now();

        if(!timers[timer]) timers[timer] = 0;
        timers[timer] += Date.now() - start;

        return result;
    }
}
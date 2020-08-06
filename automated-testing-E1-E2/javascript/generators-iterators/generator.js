function* generateSequence() {
    yield 10;
    yield 20;
    return 30;
}

const generator = generateSequence();

const one = generator.next();
console.log(one);

const two = generator.next();
console.log(two);

const three = generator.next();
console.log(three);

console.log([0, ...generateSequence()]);
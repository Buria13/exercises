function* gen() {
    const result = yield '2 ** 5?';

    console.log(result);
}

const generator = gen();

const question = generator.next().value;
console.log(question);
setTimeout(() => generator.next(2 ** 5), 2500);
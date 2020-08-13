function interpret(arr, cmds) {
    const getOperator = str => str.match(/plus|minus|multiply|divide/)[0];
    const getMethod = str => str.match(/Filter|Map|Reduce/)[0];


    const operator = getOperator(cmds);
    return arr.reduce((a, b) => {
        switch (getOperator(operator)) {
            case 'plus':
                return a + b;
            case 'minus':
                return a - b;
            case 'multiply':
                return a * b;
            case 'divide':
                return a / b;
            default:
                throw new Error(`No such command: ${operator}!`);
        }
    });


}



console.log(interpret([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'minus'));

module.exports = interpret;
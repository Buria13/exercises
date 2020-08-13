const { Executor , Command } = require('./commands')



function interpret(arr, cmds) {
    const getOperator = str => str.match(/plus|minus|multiply|divide/g);
    const getMethod = str => str.match(/Filter|Map|Reduce/g);

    const executor = new Command(new Executor(arr));

    const operator = getOperator(cmds);



}



console.log(interpret([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'minus'));

module.exports = interpret;
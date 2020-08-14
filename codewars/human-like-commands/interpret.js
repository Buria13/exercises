const Executor = require('./executor');
const Interpreter = require('./interpreter');

function interpret(arr, cmds) {
    const executor = new Executor(new Interpreter(arr), cmds);
    executor.execute();
    return executor.interpreter.arr;
}

module.exports = interpret;
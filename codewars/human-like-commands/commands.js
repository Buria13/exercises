class Interpreter {
    constructor(arr = []) {
        this.arr = arr;
    }

    Reduce(operator) {
        this.arr = this.arr.reduce((a, b) => {
            switch (operator) {
                case 'plus':
                    return a + b;
                case 'minus':
                    return a - b;
                case 'multiply':
                    return a * b;
                case 'divide':
                    return a / b;
                default:
                    throw new Error(`No such command: ${operator}`);
            }
        });
    }
}

class Command {
    constructor(commandAsString) {
        this._commandAsString = commandAsString;
        this.method = String(this.getMethod());
        this.operator = String(this.getOperator());
    }

    getMethod() {
        return this._commandAsString.match(/Filter|Map|Reduce/g);
    }

    getOperator() {
        return this._commandAsString.match(/plus|minus|multiply|divide/g);
    }
}

// 'Map the array with multiply by 2 then multiply by 5 then divide by 5 then minus 5'
class Executor {
    constructor(interpreter, cmds) {
        this.interpreter = interpreter;
        this.commands = this.getCommands(cmds);
    }

    getCommands(cmds) {
        return cmds.split(/and|then/).map(commandAsString => new Command(commandAsString));
    }

    execute() {
        let currentCommand = this.commands[0].method;
        this.commands.forEach(command => {
                if (command.method) {
                    this.interpreter[command.method](command.operator);
                    currentCommand = command.method;
                } else {
                    this.interpreter[currentCommand](command.operator);
                }
            }
        );
    }


}

function interpret(arr, cmds) {
    const executor = new Executor(new Interpreter(arr), cmds);
    executor.execute();
    return executor.interpreter.arr;
}

console.log(interpret([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Reduce the array with multiply'));

module.exports = {
    Interpreter,
    Executor
}



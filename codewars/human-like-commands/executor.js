const Command = require('./command');

class Executor {
    constructor(interpreter, cmds) {
        this.interpreter = interpreter;
        this.commands = this.getCommands(cmds);
        console.log(this.commands);
    }

    getCommands(cmds) {
        return cmds.replace(/(?<=\d )and/g, 'then')
            .split(/then/g).map(commandAsString => new Command(commandAsString));
    }

    execute() {
        let currentMethod;
        this.commands.forEach(command => {
                if (command.method !== 'null') {
                    currentMethod = command.method;
                    this.interpreter[command.method](command.operator, command.value);
                } else {
                    this.interpreter[currentMethod](command.operator, command.value);
                }
            }
        );
    }
}

module.exports = Executor;
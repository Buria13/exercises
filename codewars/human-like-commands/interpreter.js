class Interpreter {
    constructor(arr = []) {
        this.arr = arr;
    }

    map(operator, value) {
        this.arr = this.arr.map(el => {
            switch (operator) {
                case 'plus':
                    return el += value;
                case 'minus':
                    return el -= value;
                case 'multiply':
                    return el *= value;
                case 'divide':
                    return el /= value;
                default:
                    throw new Error(`No such command: ${operator}`);
            }
        });
    }

    filterSwitch(operator, value, el) {
        switch (operator) {
            case 'modulo':
                return el % value[0] === Number(value[1]);
            case 'greater':
                return el > value;
            case 'equals':
                return el === value;
            case 'not equals':
                return el !== value;
            case 'lesser':
                return el < value;
            case 'not lesser':
                return el >= value;
            case 'not greater':
                return el <= value;
            default:
                throw new Error(`No such command: ${operator}`);
        }
    }

    filter(operator, value) {
        this.arr = this.arr.filter(el => {
            if (Array.isArray(operator)) {
                return operator.some((op, i) => this.filterSwitch(op, value[i], el))
            } else {
                return this.filterSwitch(operator, value, el);
            }
        });
    }

    reduce(operator) {
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

module.exports = Interpreter;
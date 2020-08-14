class Command {
    constructor(commandAsString) {
        this._commandAsString = commandAsString;
        this.method = this.getMethod();
        this.operator = this.getOperator();
        this.value = this.getValue();
    }

    getMethod() {
        return String(this._commandAsString.match(/Filter|Map|Reduce/gi)).toLowerCase();
    }

    getOperator() {
        if (/or/.test(this._commandAsString)) return this._commandAsString.match(/plus|minus|multiply|divide|modulo|(not )?greater|(not )?lesser|(not )?equals/gi);
        return String(this._commandAsString.match(/plus|minus|multiply|divide|modulo|(not )?greater|(not )?lesser|(not )?equals/i)[0]);
    }

    getValue() {
        const value = this._commandAsString.match(/-?\d+/g);
        return !value || value.length > 1 ? value : Number(value);
    }
}

module.exports = Command;



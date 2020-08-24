class Floor {
    constructor(floor, queue) {
        this.floor = floor;
        this.queue = queue;
        this.buttons = {
            buttonUp: false,
            buttonDown: false
        }
    }

    getButtons() {
        this.buttons = {
            buttonUp: false,
            buttonDown: false
        }
        if (this.queue.some(p => p > this.floor)) this.buttons.buttonUp = true;
        if (this.queue.some(p => p < this.floor)) this.buttons.buttonDown = true;
        return this.buttons;
    }
}

module.exports = Floor;
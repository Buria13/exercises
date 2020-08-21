const Floor = require('./floor');

class Building {
    constructor(queues) {
        this.height = queues.length;
        this.floors = [...Array(this.height).keys()].map(floor => new Floor(floor, queues[floor]));
    }
}

module.exports = Building;
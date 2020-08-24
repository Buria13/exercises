const Building = require('./building');

class Lift {
    constructor(queues, capacity) {
        this.building = new Building(queues);
        this.capacity = capacity;
        this.passengers = [];
        this.currentFloor = 0;
        this.currentMovement = 'up';
        this.stops = [0];
    }

    start() {
        this.stop();
    }

    stop() {
        if (this.currentFloor === -Infinity) {
            this.currentMovement = 'up';
            this.currentFloor = Math.min(...this.getButtons());
        }

        if (this.currentFloor === Infinity) {
            this.currentMovement = 'down';
            this.currentFloor = Math.max(...this.getButtons());
        }

        if (this.currentFloor !== this.stops[this.stops.length - 1]) this.stops.push(this.currentFloor);
        this.unloadPassengers();
        this.loadPassengers();

        if (this.passengers.length > 0 || this.building.floors.some(f => f.queue.length > 0)) {
            this.move();
        } else if (this.stops[this.stops.length - 1] !== 0) {
            this.stops.push(0);
        }
    }

    move() {
        this[this.currentMovement]();
    }

    up() {
        this.currentFloor = this.getNextStop();
        if (this.currentFloor === Infinity) {
            this.currentMovement = 'down';
            this.currentFloor = this.getNextStop();
        }

        this.stop();
    }

    down() {
        this.currentFloor = this.getNextStop();
        if (this.currentFloor === -Infinity) {
            this.currentMovement = 'up';
            this.currentFloor = this.getNextStop();
        }

        this.stop();
    }

    getNextStop() {
        if (this.currentMovement === 'up') {
            return Math.min(...this.passengers, ...this.getButtons());
        } else if (this.currentMovement === 'down') {
            return Math.max(...this.passengers, ...this.getButtons());
        }
    }

    getButtons() {
        if (this.currentMovement === 'up') {
            const floorsWithButtonUp = this.building.floors.filter(floor => floor.floor > this.currentFloor)
                .filter(floor => floor.getButtons().buttonUp)
                .map(floor => floor.floor);

            return floorsWithButtonUp.length > 0 ? floorsWithButtonUp : [Infinity];

        } else if (this.currentMovement === 'down') {
            const floorsWithButtonDown = this.building.floors.filter(floor => floor.floor < this.currentFloor)
                .filter(floor => floor.getButtons().buttonDown)
                .map(floor => floor.floor);

            return floorsWithButtonDown.length > 0 ? floorsWithButtonDown : [-Infinity];
        }
    }

    unloadPassengers() {
        this.passengers = this.passengers.filter(p => p !== this.currentFloor);
    }

    loadPassengers() {
        let passenger = this.getIndexOfFirstPassengerInQueue();

        while (this.passengers.length < this.capacity && passenger !== -1) {
            this.passengers.push(...this.building.floors[this.currentFloor].queue.splice(passenger, 1));
            passenger = this.getIndexOfFirstPassengerInQueue();
        }
    }

    getIndexOfFirstPassengerInQueue() {
        if (this.currentMovement === 'up') {
            return this.building.floors[this.currentFloor].queue.findIndex(p => p > this.currentFloor);
        } else if (this.currentMovement === 'down') {
            return this.building.floors[this.currentFloor].queue.findIndex(p => p < this.currentFloor);
        }
    }
}

module.exports = Lift;
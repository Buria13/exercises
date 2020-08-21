const Lift = require('./lift');

const theLift = function(queues, capacity) {
    const lift = new Lift(queues, capacity);

    lift.move();

    console.log(lift.stops);
    return lift.stops;
}

let queues = [
    [],
    [],
    [4,4,4,4,  4,4,4,4],
    [],
    [2,2,2,2,  2,2,2,2],
]

theLift(queues, 4); // [0, 2, 4, 2, 4, 2, 0]

module.exports = theLift;
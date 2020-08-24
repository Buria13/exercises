const Lift = require('./lift');

const theLift = function(queues, capacity) {
    const lift = new Lift(queues, capacity);

    lift.start();

    console.log(lift.stops);
    return lift.stops;
}

let queues = [
    [ 1, 1, 2, 1 ],
    [],
    [ 0, 1, 1, 0 ]
]

theLift(queues, 1); // [0, 1, 5, 6, 5, 1, 0, 1, 0]

module.exports = theLift;
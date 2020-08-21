const Lift = require('./lift');

const theLift = function(queues, capacity) {
    const lift = new Lift(queues, capacity);

    lift.start();

    console.log(lift.stops);
    return lift.stops;
}

let queues = [ [ 3, 3, 3, 3, 3, 3 ], [], [], [], [], [], [] ]

//theLift(queues, 5); // [0, 3, 0, 3, 0]

module.exports = theLift;
const Battlefield = require('./battlefield')

const lawnMap = [
    '2       ',
    '  S     ',
    '21  S   ',
    '13      ',
    '2 3     '
];

const zombies = [[0,4,28],[1,1,6],[2,0,10],[2,4,15],[3,2,16],[3,3,13]];



function plantsAndZombies(lawnMap, zombieStats) {
    const bf = new Battlefield(lawnMap, zombieStats);

    while(!bf.gameIsOver()) {
        bf.nextMove();
    }

    console.log(bf.lawnMap);
    return bf.gameIsOver();
}

plantsAndZombies(lawnMap, zombies);

module.exports = plantsAndZombies;
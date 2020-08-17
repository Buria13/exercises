const Battlefield = require('./battlefield')

let lawnMap = [
    '2       ',
    '  S     ',
    '21  S   ',
    '13      ',
    '2 3     '
];

// lawnMap = [
//     '2       ',
//     '  S     ',
//     '21  S   ',
//     '13    S ',
//     '2 3     '
// ];

lawnMap = [
    '1         ',
    'SS        ',
    'SSS       ',
    'SSS       ',
    'SS        ',
    '1         '];

let zombies = [[0,4,28],[1,1,6],[2,0,10],[2,4,15],[3,2,16],[3,3,13]];
zombies = [[0,2,16],[1,3,19],[2,0,18],[4,2,21],[6,3,20],[7,5,17],[8,1,21],[8,2,11],[9,0,10],[11,4,23],[12,1,15],[13,3,22]];



function plantsAndZombies(lawnMap, zombieStats) {
    const bf = new Battlefield(lawnMap, zombieStats);

    while(!bf.gameIsOver()) {
        bf.nextMove();
        //console.log(bf.lawnMap[4]);
        // console.log(bf.movesCounter);
    }
    // console.log(bf.eliminated);
    // console.log('move Counter=', bf.movesCounter);
    return bf.eliminated ? bf.movesCounter + 1 : null;
}

plantsAndZombies(lawnMap, zombies);

module.exports = plantsAndZombies;
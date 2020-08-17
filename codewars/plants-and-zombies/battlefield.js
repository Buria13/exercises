const Zombie = require('./zombie');

class Battlefield {
    constructor(lawnMap, zombieStats) {
        this.lawnMap = lawnMap.map(row => row.split(''));
        this.zombies = zombieStats;
        this.movesCounter = 0;
        this.eliminated = false;
    }

    nextMove() {
        this.newZombiesAppear();
        this.shooting();
        this.zombiesMove();
    }

    //const zombies = [[0,4,28],[1,1,6],[2,0,10],[2,4,15],[3,2,16],[3,3,13]];
    newZombiesAppear() {
        while(this.zombies[0][0] === this.movesCounter) {
            const zombie = new Zombie(this.zombies.shift());
            this.lawnMap[zombie.row].splice(-1, 1, zombie.hp)
        }
    }

    shooting() {
        this.numberShootersAction();
        this.sShooterAction();
    }

    // ['2', ' ', '3', ' ', ' ', ' ', ' ', 28]
    numberShootersAction() {
        this.lawnMap.map(row => {
            row.map((el, _, arr) => {
                if (el === String(+el)) {
                    let numberOfShoots = +el;
                    while (numberOfShoots) {
                        this.shootZombieInRow(arr);
                        numberOfShoots--;
                    }
                }
            })
        });
    }

    sShooterAction() {
        for (let i = this.lawnMap[0].length; i > 0; i--) {
            for (let j = 0; j < this.lawnMap.length; j++) {
                if (this.lawnMap[j][i] === 'S') {
                    this.shootZombieInRow(this.lawnMap[j]);
                    this.shootZombiesDiagonally(i, j);
                }
            }
        }
    }

    shootZombieInRow(row) {
        const firstZombieIndex = row.findIndex(el => typeof el === 'number');
        if(firstZombieIndex !== -1) row[firstZombieIndex]--;
        if(row[firstZombieIndex] === 0) row[firstZombieIndex] = ' ';
    }

    shootZombiesDiagonally(i, j) {
        while((++i < this.length) && (++j < this.lawnMap[0].length)) {
            if (typeof this.lawnMap[i][j] === "number") {
                this.lawnMap[i][j]--;
                if (this.lawnMap[i][j] === 0) this.lawnMap[i][j] = ' ';
            }
        }
    }

    zombiesMove() {
        if (this.lawnMap.some(el => typeof el[0] === 'number')) {
            this.eliminated = true;
        } else {

            this.movesCounter++;
        }
    }

    gameIsOver() {
        return this.movesCounter === 2;
        return this.eliminated ? this.movesCounter
            : this.lawnMap.some(row => row.some(el => typeof el === 'number')) ? false : 'None';
    }
}

module.exports = Battlefield;
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
        // console.log(this.lawnMap[4]);
        this.shooting();
        this.zombiesMove();
    }

    // const zombies = [[0,4,28],[1,1,6],[2,0,10],[2,4,15],[3,2,16],[3,3,13]];
    newZombiesAppear() {
        while (this.zombies.length > 0 && this.zombies[0][0] === this.movesCounter) {
            const zombie = new Zombie(this.zombies.shift());
            this.lawnMap[zombie.row].splice(-1, 1, zombie.hp)
        }
    }

    shooting() {
        this.numberShootersAction();
        this.sShooterAction();
    }

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
            for (let row = 0; row < this.lawnMap.length; row++) {
                if (this.lawnMap[row][i] === 'S') {
                    this.shootZombieInRow(this.lawnMap[row]);
                    this.shootZombiesDiagonally(row, i);
                }
            }
        }
    }

    shootZombieInRow(row) {
        const firstZombieIndex = row.findIndex(el => typeof el === 'number');
        if (firstZombieIndex !== -1) row[firstZombieIndex]--;
        if (row[firstZombieIndex] === 0) row[firstZombieIndex] = ' ';
    }

    shootZombiesDiagonally(i, j) {
        let k = i;
        let l = j;
        const shootZombie = (a, b) => {
            if (typeof this.lawnMap[a][b] === 'number') {
                this.lawnMap[a][b]--;
                if (this.lawnMap[a][b] === 0) this.lawnMap[a][b] = ' ';
            }
        }

        while ((++i < this.lawnMap.length) && (++j < this.lawnMap[0].length)) {
            shootZombie(i, j);
        }
        while ((--k >= 0) && (++l < this.lawnMap[0].length)) {
            shootZombie(k, l);
        }
    }

    // ['2', ' ', '3', ' ', ' ', ' ', ' ', 28]
    zombiesMove() {
        if (this.lawnMap.some(el => typeof el[0] === 'number')) {
            this.eliminated = true;
        } else {
            this.lawnMap.map(row => {
                const firstZombieIndex = row.findIndex(el => typeof el === 'number');
                if (firstZombieIndex !== -1) {
                    row.splice(firstZombieIndex - 1, row.length, ...row.slice(firstZombieIndex), ' ');
                }
            });

            this.movesCounter++;
        }
    }

    gameIsOver() {
        return this.eliminated
             || this.zombies.length < 1 && !this.lawnMap.some(row => row.some(el => typeof el === 'number'));
    }
}

module.exports = Battlefield;
// // Interface segregation principle
//
//
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//
//     walk() {
//         console.log(`${this.name} can walk`);
//     }
//
//     swim() {
//         console.log(`${this.name} can swim`);
//     }
//
//     fly() {
//         console.log(`${this.name} can fly`);
//     }
// }
//
// class Dog extends Animal {
//     fly() {
//         return null;
//     }
// }
//
// class Eagle extends Animal {
//     swim() {
//         return null;
//     }
// }
//
// class Whale extends Animal {
//     walk() {
//         return null;
//     }
//
//     fly() {
//         return null;
//     }
// }
//


class Animal {
    constructor(name) {
        this.name = name;
    }
}

const walker = {
    walk() {
        console.log(`${this.name} can walk`);
    }
};

const swimmer = {
    swim() {
        console.log(`${this.name} can swim`);
    }
};

const flyer = {
    fly() {
        console.log(`${this.name} can fly`);
    }
};

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, walker, flyer);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog('Rex');
const eagle = new Eagle('Eagle');
const whale = new Whale('Nemo');

eagle.walk();
//eagle.swim();
eagle.fly();


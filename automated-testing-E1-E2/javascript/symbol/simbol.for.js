let globalID = Symbol.for('id');
let idAgain = Symbol.for('id');

console.log(globalID === idAgain); // true


let sym = Symbol.for('name');
let sym2 = Symbol.for('age');
let notGlobalSym = Symbol('notG');

console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));
console.log(Symbol.keyFor(notGlobalSym)); // undefined

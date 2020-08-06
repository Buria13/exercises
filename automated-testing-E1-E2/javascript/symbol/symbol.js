// Символ (symbol) – __примитивный__ тип данных, использующийся для создания уникальных идентификаторов.

let id = Symbol('idd');

const user = {
    name: "Buria",
    age: 42,
    [id]: 'declaration inside object'
};

user[id] = 13;

console.log(id.description);
console.log(user.age);
console.log(user[id]);

for (let key in user) {
    console.log('for in:', key);
}

console.log('Object.keys():', Object.keys(user)); // no symbol
console.log('Object.getOwnPropertySymbols():', Object.getOwnPropertySymbols(user)); // Symbol(idd)

let clone = Object.assign({}, user);
console.log('Object.assign():', clone[id]); // there is symbol


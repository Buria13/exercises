let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adios'
};

console.log(dictionary['Hello']);
console.log(dictionary['Bye']);
console.log(dictionary['Welcome']);

dictionary = new Proxy(dictionary, {
    get(target, phrase) {
        if (phrase in target) {
            return target[phrase];
        } else {
            return phrase;
        }
    }
});

console.log(dictionary['Hello']);
console.log(dictionary['Bye']);
console.log(dictionary['Welcome']);
let user = {};

user = new Proxy(user, {
    ownKeys(target) {
        return ['a', 'b', 'x'];
    },

    getOwnPropertyDescriptor(target, prop) {
        return {
            enumerable: true,
            configurable: true
        };
    }
});



console.log(Object.keys(user)); // ['a', 'b', 'x']
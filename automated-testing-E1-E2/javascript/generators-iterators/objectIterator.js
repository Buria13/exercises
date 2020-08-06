const user = {
    name: "Buria",
    age: 36,
    superMan: true,

    [Symbol.iterator]: function () {
        const keys = Object.keys(this).sort();
        let index = 0;

        return {
            next: () => {
                return {
                    value: this[keys[index]],
                    done: index++ >= keys.length
                };
            }
        }

    },

};

for (const value of user) {
    console.log(value);
}
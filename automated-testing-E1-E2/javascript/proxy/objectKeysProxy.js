let user = {
    name: "Buria",
    age: 36,
    _password: '*****'
};

user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});

for(const key in user) {
    console.log(key);
}
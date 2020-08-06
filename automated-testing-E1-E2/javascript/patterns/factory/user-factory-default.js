const createUser = ({
    userName = 'Anon',
    avatar = 'anon.png'
} = {}) => ({
    userName,
    avatar,

    setUserName(userName) {
        this.userName = userName;
    }
});

console.log(createUser({userName: 'Buria'}));
console.log(createUser());
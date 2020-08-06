const createUser = ({userName, avatar}) => ({
    userName,
    avatar,

    setUserName(userName) {
        this.userName = userName;
        return this;
    }
});

console.log(createUser({userName: 'Buria', avatar: 'buria.png'}));
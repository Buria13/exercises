const Mongo = {
    'isValid' : function(s) {
        return /^[0-9a-f]{24}$/g.test(s);
    },
    'getTimestamp' : function(s){
        return this.isValid(s) && new Date(parseInt(s.substr(0, 8), 16) * 1000);
    }
}

console.log(Mongo.isValid('507f1f77bcf86cd799439011'));  // true
console.log(Mongo.isValid('d07f1f77bcf86FF799439016')); // false
console.log(Mongo.isValid('507f1f77bcf86cd79943901'));   // false
console.log(Mongo.isValid('111111111111111111111111'));  // true
console.log(Mongo.isValid(111111111111111111111111));    // false
console.log(Mongo.isValid('3333333333333333333333334'));  // false (we arbitrarily only allow lowercase letters)
let str = "Reduce the array with multiply by";
str = 'Reduce the array with plus';

//console.log(str.match(/multiply|plus/));

const operator = str => str.match(/plus|minus|multiply|divide/)[0];


console.log(operator(str));
let str = "Reduce the array with multiply by";
str = 'Reduce the array with plus';

//console.log(str.match(/multiply|plus/));

const operator = str => str.matchAll(/Reduce|plus|minus|multiply|divide/);


// console.log(str.match(/Reduce|Filter|Map|plus|minus|multiply|divide/g));

let sss = 'Filter the array and return if modulo 3 equals 1 then map with multiply by 3';

console.log(sss.split(/and|then/));
let str = "John Bull";
// let regexp = /(\w+) (\w+)/;

console.log( str.replace(/(\w+) (\w+)/, '$2$1') ); // Bull, John
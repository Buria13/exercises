const str = 'something first blablabla second third not second';

console.log(str.match(/first|(not )?second/g));

let arr = [1, 2];

console.log(Array.isArray(str));
console.log(Array.isArray(arr));
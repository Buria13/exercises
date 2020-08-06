const abc = "aaabc";
const str = "zzzacccbbbzzz";

function regexContainsAll(s) {
    return [...s].map(e=>`(?=.*${e})`).join('')
}

const pattern = regexContainsAll(abc);
console.log(new RegExp(pattern));
console.log(new RegExp(pattern).test(str));  // -> true


let str = 'ferwrt464233xcv';

let [first, second] = ["Ba(1)Cl(2)", "H(2)SO4(1)"]


const separateElements = el => el.match(/(.*?)\)/g);
const numOnly = el => el.match(/\d+/g);

const divideIndexes = str => str.replace(/\d+(?=\))/g, s => ('' + (s / 11)) );
const greatestCommonDivisor = ([x, y]) => {
    while (x && y) {
        Number(x) > Number(y) ? x %= y : y %= x;
    }
    return +x + +y;
}

let element = "B32f(2)Cl(2)";
const result = ['d2(12165)hjkoLO(13160)','I93HK(14587)4qA2v(22634)'];
console.log(result.map(el => {
    console.log(el.match(/\d+/g));
    const divisor = greatestCommonDivisor(el.match(/\d+/g));
    return divisor > 1 ? el.replace(/\d+(?=\))/g, s => ('' + (s / divisor)) ) : el;
}));

const Test = require('./test/test');

function chemistry(first, second) {
    const greatestCommonDivisor = ([x, y]) => {
        while (x && y) {
            Number(x) > Number(y) ? x %= y : y %= x;
        }
        return +x + +y;
    }
    const react = ([a, b]) => [b[0] + a[1], a[0] + b[1]];
    const indexesOnly = /\d+(?=\))/g;
    const separateElements = /(.*?)\)/g;

    const result = react([first.match(separateElements), second.match(separateElements)]);
    return result.map(el => {
        const divisor = greatestCommonDivisor(el.match(indexesOnly));
        return divisor > 1 ? el.replace(indexesOnly, s => ('' + (s / divisor)) ) : el;
    });
}

Test.assertDeepEquals(chemistry("Ba(1)Cl(2)", "H(2)SO4(1)"), ["H(1)Cl(1)", "Ba(1)SO4(1)"]);
Test.assertDeepEquals(chemistry("I93HK(14587)hjkoLO(26320)", "d2(24330)4qA2v(22634)"), ["d2(2433)hjkoLO(2632)", "I93HK(14587)4qA2v(22634)"]);
Test.assertDeepEquals(chemistry("djDK9mc(390393197)w656(25806)", "EmJ(22798)E0auTb(149665260)"), ["EmJ(11399)w656(12903)", "djDK9mc(390393197)E0auTb(149665260)"]);
Test.assertDeepEquals(chemistry("QdNUDM808bmETlLSp1wMsdlS64sMk01IaBWWERS7h4Cm5uGnRulN53g5JwjVZhw4tAN6mYgu(246447576)0FWXqSTUuC9ikISTgaJ69Te(5765)", "qAMjI7S7A1c3X7IPzpIKmuS7S16YNCf5oZnRPVhKCejGI(27284)daplRQmSW7MBjXRq6AjbgQ1(303073590)"), ["qAMjI7S7A1c3X7IPzpIKmuS7S16YNCf5oZnRPVhKCejGI(27284)0FWXqSTUuC9ikISTgaJ69Te(5765)", "QdNUDM808bmETlLSp1wMsdlS64sMk01IaBWWERS7h4Cm5uGnRulN53g5JwjVZhw4tAN6mYgu(41074596)daplRQmSW7MBjXRq6AjbgQ1(50512265)"]);

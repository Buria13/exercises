const Test = require('../test/test');

function overlapPoint(c1, c2) {   //coding and coding..
    const [x1, y1, r1] = c1;
    const [x2, y2, r2] = c2;
    const r = [r1, r2];

    let result = 0;

    const insideBothCircles = (x, y) => [[x1, y1], [x2, y2]].every(([a, b], i) => {
        return Math.sqrt(Math.abs(x - a)**2 + Math.abs(y - b)**2) <= r[i];
    });

    for (let x = Math.min(x1, x2) - Math.max(...r); x <= Math.max(x1, x2) + Math.max(...r); x++) {
        for (let y = Math.min(y1, y2) - Math.max(...r); y <= Math.max(y1, y2) + Math.max(...r); y++) {
            if (insideBothCircles(x, y)) result++;
        }
    }

    return result;
}


Test.assertEquals(overlapPoint([2, 2, 3], [0, -1, 3]),8)

Test.assertEquals(overlapPoint([2, 1, 2], [0, -1, 3]),6)

Test.assertEquals(overlapPoint([1, 0, 3], [1, 4, 1]),1)

Test.assertEquals(overlapPoint([1, 3, 1], [0, -1, 3]),0)

Test.assertEquals(overlapPoint([0, 0, 1], [0, 0, 2]),5)

Test.assertEquals(overlapPoint([0, 0, 1], [0, 0, 1]),5)
function smaller(arr) {
    return arr.map((value, i) => arr.slice(i + 1).filter(el => el < value).length);
}

module.exports = smaller;

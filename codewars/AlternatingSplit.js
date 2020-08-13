function encrypt(text, n) {
    return n < 1 || !text ? text :
        encrypt( [...text]
            .reduce(([a, b], ch, i) => i % 2 ? [a+ch, b] : [a, b+ch], ['', ''])
            .join('') , --n);
}

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;

    let result = '';
    let half = Math.floor(encryptedText.length / 2);

    for (let i = 0; i < half; i++) {
        result += (encryptedText[i + half] + encryptedText[i]);
    }

    result = encryptedText[half * 2] ? result + encryptedText[half * 2] : result;
    return --n ? decrypt(result, n) : result;
}

console.log(encrypt("This is a test!", 0)); //, 1 -> "hsi  etTi sats!"
console.log(encrypt("This is a test!", 1)); //, 1 -> "hsi  etTi sats!"
console.log(encrypt("This is a test!", 2)); //, 1 -> "hsi  etTi sats!"
// console.log(encrypt("This is a test!", 3)); //, 1 -> "hsi  etTi sats!"

// console.log(decrypt("s eT ashi tist!", 2));

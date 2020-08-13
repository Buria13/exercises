const Test = require('./test/test');

function spinWords(str){
    return str.replace(/\w{5,}/g, w => w.split('').reverse().join(''));
}

console.log(spinWords("Just kidding there is still one more")); // "Just gniddik ereht is llits one more");
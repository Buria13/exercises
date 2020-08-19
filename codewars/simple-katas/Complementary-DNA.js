str = "TAACG";
var mapObj = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
};
let dna = 'AAAA'
console.log(dna);
function DNAStrand(dna){
    return dna.replace(/A|T|C|G/gi, (matched) => ({
        A:"T",
        T:"A",
        C:"G",
        G:"C"
    }[matched]));
}

console.log(DNAStrand(dna));
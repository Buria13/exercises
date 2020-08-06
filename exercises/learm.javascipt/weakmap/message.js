let int32View = new ArrayBuffer(16);

console.log(int32View.byteLength === 16);

let int32View = new Int32Array(int32View);

for (let i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2;
}



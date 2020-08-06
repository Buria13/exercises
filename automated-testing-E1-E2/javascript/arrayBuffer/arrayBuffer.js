let buffer = new ArrayBuffer(16);

// console.log(buffer.byteLength);

let view = new Uint32Array(buffer);
console.log(Uint32Array.BYTES_PER_ELEMENT);
console.log(view.length);
console.log(view.byteLength);

view[0] = 123456;

for (let obj of view) {
    console.log(obj);
}
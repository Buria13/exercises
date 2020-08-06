let buffer = new Uint8Array([255, 255, 255, 255]).buffer;

let dataView = new DataView(buffer);

console.log(dataView.getUint8(0));
console.log(dataView.getUint16(0));
dataView.setUint32(0, 0);
console.log(dataView.getUint8(0));
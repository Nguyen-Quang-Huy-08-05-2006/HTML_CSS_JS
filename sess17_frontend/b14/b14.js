let radius = prompt("moi bạan nhap vao ban kinh: ");
let height = prompt("moi ban nhap vao chieu cao: ");
let surArea = 2 * Math.PI * radius * height;
let totalArea = (2 * Math.PI * radius * height) + (2 * Math.PI * radius *radius);
let volume = Math.PI * radius *radius * height;
let circum = 2 * Math.PI * radius;

console.log(` dien tich xung quanh hinh tru la: ${surArea}`);
console.log(` dien tich toan phan hinh tru la: ${totalArea}`);
console.log(` the tich hinh tru la: ${volume}`);
console.log(` chu vi đáy hinh tru la: ${circum}`);
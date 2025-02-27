let a = Number( prompt("nhap a"));
if(a < 0) {
    console.log("khong hop le!");
}
let b = Number( prompt("nhap b"));
let c = Number( prompt("nhap c"));

let x;
let y;

let delta = b ** 2 - 4 * a * c;

if(delta = 0 || delta > 0){
    x = (-b + Math.sqrt(delta))/2*a;
    y = (-b - Math.sqrt(delta))/2*a;

    console.log(x);
    console.log(y);
    
}
else {
    console.log("phuong trinh vo nghiem");
}
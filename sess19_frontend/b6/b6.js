let a = prompt("nhap a");
if(a < 0) {
    console.log("khong hop le!");
}
let b = prompt("nhap b");
let c = prompt("nhap c");

let x;
let y;

let delta = b ** 2 - 4 * a * c;

if(delta = 0 || delta > 0){
    x1 = (-b + Math.sqrt(delta))/2*a;
    x2 = (-b - Math.sqrt(delta))/2*a;
    if(x1==x2){
        alert(`Phuong trinh co nghiem kep x1 = x2 = ${x1}`)
    }else{
        alert(`Phuong trinh co 2 nghiem phan biet x1 = ${x1}, x2=${x2}`)
    }
}
else {
    alert(`phuong trinh vo nghiem`);
}
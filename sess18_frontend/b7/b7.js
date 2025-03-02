let a=+prompt("Nhap vao so a:");
let b=+prompt("Nhap vao so b:");
let ope=prompt("Nhap vao 1 trong 4 cach tinh(+,-,*,/)")
let total = 0;
switch(ope){
    case "+":
         total = a + b
        alert(`${a} ${ope} ${b} = ${total}`)
    break;
    case "-":
         total = a - b
        alert(`${a} ${ope} ${b} = ${total}`)
    break;
    case "*":
         total = a * b
        alert(`${a} ${ope} ${b} = ${total}`)
    break;
    case "/":
        if(b==0){
            alert(`khong hop le voi phep toan`);
            break;
        }else{
            total = a / b
           alert(`${a} ${ope} ${b} = ${total}`)
        }
    break;
    default: alert(`${ope}? cu phap khong hop le`)
}
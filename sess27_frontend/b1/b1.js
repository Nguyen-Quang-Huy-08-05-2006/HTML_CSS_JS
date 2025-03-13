function plus(a,b){
    let n = a+b
    return n
}
function minus(a,b){
    let n = a-b
    return n
}
function multiply(a,b){
    let n = a*b
    return n
}
function divide(a,b){
    let n = a/  b
    return n
}
let end = false
do{
    let a = 0
    let b=0
    answer=prompt("1.Cộng hai số \n2.Trừ hai số\n 3.Nhân hai số.\n4.Chia hai số\n5.Thoát.\nCâu trả lời của bạn:")
    if(isNaN(answer)||answer<1||answer>5){
        alert("Sai cu phap")
        continue;
    }
    switch(answer){
        case '1':
             a = +prompt("Nhap vao so thu nhat")
             b = +prompt("Nhap vao so thu hai")
            const finalPlus=plus(a,b);
            alert(`${a}+${b}=${finalPlus}`)
        break;
        case '2': 
            a = +prompt("Nhap vao so thu nhat")
            b = +prompt("Nhap vao so thu hai")
            const finalMinus=minus(a,b);
            alert(`${a}-${b}=${finalMinus}`)
        break;
        case '3':
            a = +prompt("Nhap vao so thu nhat")
            b = +prompt("Nhap vao so thu hai")
            const finalMultiply=multiply(a,b);
            alert(`${a}*${b}=${finalMultiply}`)
        break;
        case '4':
            a = +prompt("Nhap vao so thu nhat")
            b = +prompt("Nhap vao so thu hai")
            const finalDivide=divide(a,b);
            alert(`${a}/${b}=${finalDivide}`)
        break;
        case '5':
            alert("Thoat chuong trinh")
            end = true
        break;
    }
}while(!end);
function premiterRound(r,pi){
    let final = 2*pi*r
    return final;
}
function acreageRound(r,pi){
    final= pi * (r**2)
    return final
}
function premiterRectangle(a,b){
    final = (a+b)*2;
    return final
}
function acreageRectangle(a,b){
    final = a*b
    return final;
}
function radius(r){
    r = prompt("Nhap vao ban kinh hinh tron")
    if(isNaN(r)){
        alert("Sai cu phap")
        return falsy
    }
    return r
}
function rectangle(){
    let ab=[]
    ab[0]= prompt("Nhap vao chieu dai")
    if(isNaN(a)){
        alert("Sai cu phap")
        return falsy
    }
    ab[1]=prompt("Nhap vao chieu rong")
    if(isNaN(b)){
        alert("Sai cu phap")
        return falsy
    }
    return ab
}
let r=0
let height=0
let width=0
const pi=3.14
let end = false
do{
    answer=prompt("1.Tính diện tích hình tròn.\n2.Tính chu vi hình tròn.\n3.Tính chu vi hình chữ nhật.\n5.Thoát.\nCâu trả lời của bạn:")
    if(isNaN(answer)||answer<1||answer>5){
        alert("Sai cu phap")
        continue;
    }
    switch(answer){
        case '1':
        radius(r)
        if(isNaN(radius)){
            break
        }
        let acreage= acreageRound(radius,pi)
        alert(`Chu vi hinh tron = ${acreage}`)
        break;
        case '2': 
        radius(r)
        if(isNaN(radius)){
            break
        }
        let premiter = acreageRound(radius,pi)
        alert(`Chu vi hinh tron = ${premiter}`)
        break;
        case '3':
            rectangle()
            if(isNaN(rectangle)){
                break
            }
            acreage= acreageRectangle(rectangle[0],rectangle[1])
            alert(`dien tich hinh chu nhat = ${acreage}`)
        break;
        case '4':
            rectangle()
            if(isNaN(rectangle)){
                break
            }
            premiter= premiterRectangle(rectangle[0],rectangle[1])
            alert(`dien tich hinh chu nhat = ${premiter}`)
        break;
        case '5':
            alert("Thoat chuong trinh")
            end = true
        break;
    }
}while(!end);
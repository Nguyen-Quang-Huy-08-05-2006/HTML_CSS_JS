let a=prompt("Nhap vap canh a cua tam giac");
let b=prompt("Nhap vap canh b cua tam giac");
let c=prompt("Nhap vap canh c cua tam giac");
if(a+b>c||a+c>b||b+c>a){
    if(a==b && b==c){
        alert(`${a} ${b} ${c} la 3 canh cua tam giac deu`)
    }else if((a**2)+(b**2) == c**2||(a**2)+(c**2)==b**2||(c**2)+(b**2)==a**2){
        alert(`${a} ${b} ${c} la 3 canh cua tam giac vuong`)
    }else if(a==b && b!=c || a==c && a!=b || c==b && a!=c){
        alert(`${a} ${b} ${c} la 3 canh cua tam giac can`)
    }else{
        alert(`${a} ${b} ${c} la 3 canh cua tam giac thuong`)
    }
}else{
    alert(`${a} ${b} ${c} khong phai 3 canh cua 1 tam giac.`)
}
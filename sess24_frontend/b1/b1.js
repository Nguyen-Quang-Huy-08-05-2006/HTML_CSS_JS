let numbers=[]
let index=0
let answer
let end=false
do{
    answer=+prompt("1. Nhập mảng\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n4. Tính tổng các phần từ trong mảng\n5. Tìm số lần xuất hiện của một phần từ trong mảng\n6. Sắp xếp mảng tăng dần\n7. Thoát chương trình\nCâu trả lời của bạn:")
    if(isNaN(answer)||answer<1||answer>7){
        alert("Sai cu phap")
        continue;
    }
    switch(answer){ 
        case 1:
            index=+prompt("Ban muon mang co bao nhieu phan tu");
            if (isNaN(index) || +index <= 0) {
                alert("Sai cu phap");
              } else {
                for(let i=0;i<index;i++){
                    let a=+prompt(`Nhap vao phan tu thu ${i+1}`)
                    if(isNaN(answer)){
                        break
                    }
                    numbers.push(a)
                }
              }
        break;
        case 2:
            alert("Mang cua ban: ["+numbers.join(", ")+"]")
        break;
        case 3:
            let max=numbers[0]
            let min=numbers[0]
            for(let i=1;i<numbers.length;i++){
                if(numbers[i]>max){
                    max=numbers[i]
                }else if(numbers[i]<min){
                    min=numbers[i]
                }
            }
            alert(`Phan tu lon nhat = ${max}, phan tu nho nhat = ${min}`)
        break;
        case 4:
            let temp=numbers[0]
            for(let i=1;i<numbers.length;i++){
                temp+=numbers[i]
            }
            alert(`Tong cac phan tu = ${temp}`)
        break;
        case 5:
            let num=+prompt("Nhap phan tu ban muon tim")
            let count=0
            for(let i=0;i<numbers.length;i++){
                if(num==numbers[i])
                    count++
            }
            alert(`Phan tu ${num} xuat hien ${count} lan`)
        break;
        case 6:
            alert("Mang sau khi sap xep: ["+numbers.sort(function(a, b){return a - b})+"]")
        break;
        case 7:
            alert("Thoat chuong trinh");
            end = true;
            break;
    }
}while(!end);
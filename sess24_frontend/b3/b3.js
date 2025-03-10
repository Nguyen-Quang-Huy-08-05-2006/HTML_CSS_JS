let numbers=[]
let index=0
let answer
let end=false
do{
    answer=+prompt("1. Nhập mảng\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất trong màng và in ra chỉ số của nó\n4.Tính tổng và trung bình cộng của các số dương trong màng\n5. Đào ngược màng\n6. Kiểm tra màng có đối xứng không\n7. Thoát chương trình\nCâu trả lời của bạn:")
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
                    numbers.push(a)
                }
              }
        break;
        case 2:
            alert("Mang cua ban: ["+numbers.join(", ")+"]")
        break;
        case 3:
            let max=numbers[0]
            let a=0
            for(let i=1;i<numbers.length;i++){
                if(max<numbers[i]){
                    max=numbers[i]
                    a=i
                }
            }
            alert(`So lon nhat la ${max} o vi tri ${a}`)
        break;
        case 4:
            let positiveNumber=[]
            for(let i=0;i<numbers.length;i++){
                if(numbers[i]>0){
                    positiveNumber.push(numbers[i])
                }
            }
            let avg=0
            let total=positiveNumber[0]
            for(let i=1;i<positiveNumber.length;i++){
                total+=positiveNumber[i]
            }
            avg=total/positiveNumber.length
            alert(`Tong cac so duong = ${total} va trung binh cong = ${avg}`)
        break;
        case 5:
            alert("Mang sau khi sap xep: ["+numbers.sort(function(a, b){return b - a})+"]")
        break;
        case 6:
            let isSymmetric = true;
        for (let i = 0; i < Math.floor(numbers.length / 2); i++) {
            if (numbers[i] !== numbers[numbers.length - 1 - i]) {
                isSymmetric = false;
                break;
            }
        }
        if (isSymmetric) {
            alert("Mang doi xung");
        } else {
            alert("Mang khong doi xung");
        }
        break;
        case 7:
            alert("Thoát chương trình.");
            end = true;
            break;
    }
}while(!end);
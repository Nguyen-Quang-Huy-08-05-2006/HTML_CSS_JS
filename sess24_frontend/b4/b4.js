let numbers=[]
let answer
let end=false
do{
    answer=+prompt("1. Nhập mảng 2 chiều\n2. Hiển thị mảng 2 chiều\n3. Tính tổng các phần tử trong mảng\n4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n5.Tính trung bình cộng các phần tử của một hàng cụ thể\n6. Đảo ngược các hàng trong mảng\n7. Thoát chương trình\nCâu trả lời của bạn:")
    if(isNaN(answer)||answer<1||answer>7){
        alert("Sai cu phap")
        continue;
    }
    switch(answer){
        case 1:
            let row=+prompt("Nhap vao so hang");
            let col=+prompt("Nhap vao so cot");
            if (isNaN(row) || +row <= 0||isNaN(col) || +col <= 0) {
                alert("Sai cu phap");
              } else {
                for(let i=0;i<row;i++){
                    let row=[]
                    for(let j=0;j<col;j++){
                        row.push(+prompt(`Nhap vao phan tu hang thu [${i}] cot [${j}]`))
                    }
                    numbers.push(row)
                }
              }
        break;
        case 2:
            alert("Mang cua ban: ["+numbers.join(", ")+"]")
        break;
        case 3:
            let temp=0
            for(let i=0;i<numbers.length;i++){
                for(let j=0;j<numbers.length[i];j++){
                    temp+=numbers[i][j]
                }
            }
            alert(`Tong cac phan tu = ${temp}`)
        break;
        case 4:
            let max = numbers[0][0];
            let maxRow = 0, maxCol = 0;
            for (let i = 0; i < numbers.length; i++) {
                for (let j = 0; j < numbers[i].length; j++) {
                    if (numbers[i][j] > max) {
                        max = numbers[i][j];
                        maxRow = i;
                        maxCol = j; 
                    }
                }
            }
            alert(`Phan tu lon nhat la ${max} tai vi tri [${maxRow}][${maxCol}]`);
            break;
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
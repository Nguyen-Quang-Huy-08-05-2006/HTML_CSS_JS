let numbers=[]
let index=0
let answer
let end=false
do{
    answer=+prompt("1. Nhập mảng\n2. Hiển thị mảng\n3. Tìm các phần từ chẵn và lẻ\n4. Tính trung bình cộng của mảng\n5. Xóa phần tử tại vị trí chỉ định\n6. Tìm phần từ lớn thứ hai trong mảng\n7. Thoát chương trình\nCâu trả lời của bạn:")
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
            let even =[]
            let odd=[]
            for(let i=0;i<numbers.length;i++){
                if(numbers[i]%2==0){
                    even.push(numbers[i])
                }else{  
                    odd.push(numbers[i])
                }
            }
            alert(`Cac phan tu la so chan : ${even.join(", ")} \n Cac phan tu la so le : ${odd.join(", ")}`)
        break;
        case 4:
            let avg=0
            let total=numbers[0]
            for(let i=1;i<numbers.length;i++){
            total+=numbers[i]
            }
            avg=total/numbers.length
            alert(`Trung binh cong cac phan tu la ${avg}`)
        break;
        case 5:
            let pos=+prompt("Nhap vi tri phan tu ban muon xoa")
            numbers.splice(pos,1)
            alert(`Mang sau khi xoa [${numbers.join(", ")}]`)
        break;
        case 6:
            let max=0
            let secondMax=0
            for(let i=0;i<numbers.length;i++){
                if (numbers[i] > max) {
                    max = numbers[i];
                  }
                }
                for (let i = 0; i < numbers.length; i++) {
                  if (numbers[i] < max) {
                    if (secondMax < numbers[i]) {
                      secondMax = numbers[i];
                    }
                  }
                }
            alert(`Phan tu lon thu 2: ${secondMax}`)
        break;
        case 7:
            alert("Thoát chương trình.");
            end = true;
            break;
    }
}while(!end);
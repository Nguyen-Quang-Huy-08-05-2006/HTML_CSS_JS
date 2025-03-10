let arr = [];
let rows, cols;
let choice
do {
    choice = Number(prompt(` Menu chức năng:
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột
7. Thoát chương trình
Nhập lựa chọn của bạn:`));

    switch (choice) {
        case 1:
            rows = Number(prompt("Nhập số hàng:"));
            cols = Number(prompt("Nhập số cột:"));
            arr = [];
            for (let i = 0; i < rows; i++) {
                arr[i] = [];
                for (let j = 0; j < cols; j++) {
                    arr[i][j] = Number(prompt(`Nhập phần tử tại hàng ${i + 1}, cột ${j + 1}:`));
                }
            }
            console.log(" Đã nhập mảng thành công!");
            break;

        case 2:
            if (arr.length === 0) {
                console.log("Mảng rỗng. Hãy nhập dữ liệu trước!");
            } else {
                console.log(" Mảng 2 chiều:");
                arr.forEach(row => console.log(row.join("\t")));
            }
            break;

        case 3:
            if (arr.length === 0) {
                console.log("Mảng rỗng.");
            } else {
                let total = arr.flat().reduce((sum, num) => sum + num, 0);
                console.log(` Tổng các phần tử trong mảng: ${total}`);
            }
            break;

        case 4:
            if (arr.length === 0 || rows !== cols) {
                console.log("Mảng không vuông hoặc chưa có dữ liệu.");
            } else {
                let mainDiagonalSum = 0;
                for (let i = 0; i < rows; i++) {
                    mainDiagonalSum += arr[i][i];
                }
                console.log(`Tổng đường chéo chính: ${mainDiagonalSum}`);
            }
            break;

        case 5:
            if (arr.length === 0 || rows !== cols) {
                console.log(" Mảng không vuông hoặc chưa có dữ liệu.");
            } else {
                let secondaryDiagonalSum = 0;
                for (let i = 0; i < rows; i++) {
                    secondaryDiagonalSum += arr[i][cols - i - 1];
                }
                console.log(` Tổng đường chéo phụ: ${secondaryDiagonalSum}`);
            }
            break;

        case 6:
            if (arr.length === 0) {
                console.log("Mảng rỗng.");
            } else {
                let type = prompt("Bạn muốn tính trung bình cộng của hàng (H) hay cột (C)?").toUpperCase();
                if (type === "H") {
                    let rowIndex = Number(prompt(`Nhập số thứ tự hàng (1 - ${rows}):`)) - 1;
                    if (rowIndex < 0 || rowIndex >= rows) {
                        console.log(" Hàng không hợp lệ!");
                    } else {
                        let sum = arr[rowIndex].reduce((acc, num) => acc + num, 0);
                        console.log(`Trung bình cộng của hàng ${rowIndex + 1}: ${sum / cols}`);
                    }
                } else if (type === "C") {
                    let colIndex = Number(prompt(`Nhập số thứ tự cột (1 - ${cols}):`)) - 1;
                    if (colIndex < 0 || colIndex >= cols) {
                        console.log(" Cột không hợp lệ!");
                    } else {
                        let sum = 0;
                        for (let i = 0; i < rows; i++) {
                            sum += arr[i][colIndex];
                        }
                        console.log(`Trung bình cộng của cột ${colIndex + 1}: ${sum / rows}`);
                    }
                } else {
                    console.log(" Lựa chọn không hợp lệ.");
                }
            }
            break;

        case 7:
            alert(" Thoát chương trình.");
            break;
        default:
            alert("Không hợp lệ");
            break;
    }
}while(choice !== 7);
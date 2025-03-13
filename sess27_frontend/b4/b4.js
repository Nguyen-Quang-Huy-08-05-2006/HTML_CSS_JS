let arr = [];
function inputArray() {
    let count;
    do {
        count = prompt("Nhập số lượng phần tử:");
        if (count === null || count.trim() === "" || isNaN(count) || Number(count) <= 0) {
            console.log("Dữ liệu không hợp lệ. Vui lòng nhập lại.");
        } else {
            count = Number(count);
            break;
        }
    } while (true);
    arr = [];
    for (let i = 0; i < count; i++) {
        let num;
        do {
            let input = prompt(`Nhập phần tử thứ ${i + 1}:`);
            if (input === null || input.trim() === "" || isNaN(input)) {
                console.log("Dữ liệu không hợp lệ. Vui lòng nhập lại.");
            } else {
                num = Number(input);
                break;
            }
        } while (true);
        arr.push(num);
    }
    console.log("Danh sách số nguyên:", arr);
}
function calculateAvg() {
    if (arr.length === 0) {
        console.log("Danh sách rỗng. Vui lòng nhập số trước.");
        return;
    }
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let avg = sum / arr.length;
    console.log(`Trung bình cộng các số: ${avg}`);
}

function largestEven() {
    if (arr.length === 0) {
        console.log("Danh sách rỗng. Vui lòng nhập số trước.");
        return;
    }
    let evenNumbers = arr.filter(num => num % 2 === 0);
    if (evenNumbers.length === 0) {
        console.log("Không có số chẵn trong danh sách.");
    } else {
        console.log(`Số chẵn lớn nhất: ${Math.max(...evenNumbers)}`);
    }
}

function smallestOdd() {
    if (arr.length === 0) {
        console.log("Danh sách rỗng. Vui lòng nhập số trước.");
        return;
    }
    let oddNumbers = arr.filter(num => num % 2 !== 0);
    if (oddNumbers.length === 0) {
        console.log("Không có số lẻ trong danh sách.");
    } else {
        console.log(`Số lẻ nhỏ nhất: ${Math.min(...oddNumbers)}`);
    }
}

function showMenu() {
    do {
        let choice = +prompt(`\n===== MENU XỬ LÝ SỐ NGUYÊN =====
        1. Nhập danh sách số nguyên
        2. Tính trung bình các số
        3. Tìm số chẵn lớn nhất
        4. Tìm số lẻ nhỏ nhất
        5. Thoát
        Hãy nhập lựa chọn: 
        `);

        if (choice === null || isNaN(choice)) {
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
            continue;
        }

        choice = Number(choice);
        switch (choice) {
            case 1:
                inputArray();
                break;
            case 2:
                calculateAvg();
                break;
            case 3:
                largestEven();
                break;
            case 4:
                smallestOdd();
                break;
            case 5:
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (true);
}

showMenu();
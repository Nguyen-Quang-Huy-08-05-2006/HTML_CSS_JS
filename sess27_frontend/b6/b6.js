function isArithmeticSequence(arr) {
    if (!Array.isArray(arr) || !arr.every(Number.isInteger)) {
        return "dữ liệu không hợp lệ";
    }
    if (arr.length < 2) {
        return "TRUE"; 
    }
    const diff = arr[1] - arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return "FALSE";
        }
    }
    return "TRUE";
}

console.log(isArithmeticSequence([2, 4, 6, 8])); 
console.log(isArithmeticSequence([3, 6, 9, 12, 14])); 
console.log(isArithmeticSequence([3, 6, 9, 12, 14, 99, 1000, -1])); 
console.log(isArithmeticSequence("abc")); 

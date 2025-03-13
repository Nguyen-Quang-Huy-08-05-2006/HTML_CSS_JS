function findMissingNumber(arr) {
    let n = Math.max(...arr);
    let m = Math.min(...arr);

    let expectedSum = (n * (n + 1)) / 2 - ((m - 1) * m) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 3, 5]));
console.log(findMissingNumber([10, 11, 12, 14, 15]));
console.log(findMissingNumber([100, 101, 102, 104]));
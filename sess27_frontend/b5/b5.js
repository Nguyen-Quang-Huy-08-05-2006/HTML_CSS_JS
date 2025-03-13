const splitArray = (arr, size) => {
    if (!Array.isArray(arr) || arr.some((number) => !Number.isInteger(number)) || size <= 0 || !Number.isInteger(size)) {
        return "Dữ liệu không hợp lệ";
    }
    const childrenArray = [];

    for (let i = 0; i < arr.length; i += size) {
        childrenArray.push(arr.slice(i, i + size));
    }
    return childrenArray;
};
const array = [1, 2, 3, 4, 5, 6];
const result = splitArray(array, 3);
console.log("result", result);
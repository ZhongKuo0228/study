const arr = [2, 7, 3, 12, 5, 8, 10];

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let left = [];
    let right = [];

    let pivot = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];
        if (num < pivot) {
            left.push(num);
        } else {
            right.push(num);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(arr));

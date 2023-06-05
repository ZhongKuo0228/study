let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [1, 2, 3, 3, 4, 6, 3, 8, 9, 10];

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            console.log("在位置", i, "找到", target);
            return i;
        }
    }
    console.log("找不到", target);
    return -1;
}

linearSearch(arr1, 9);

linearSearch(arr2, 3);

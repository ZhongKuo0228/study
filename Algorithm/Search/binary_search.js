function binarySearch(array, target) {
    let min = 0;
    let max = array.length - 1;
    let step = 0;

    while (min <= max) {
        step++;
        let mid = Math.floor((max + min) / 2); //無條件捨去
        if (target > array[mid]) {
            min = mid + 1;
        } else if (target < array[mid]) {
            max = mid - 1;
        } else if (target === array[mid]) {
            console.log("全數列有 " + array.length + " 個數字");
            console.log("找到數字： " + target + " ，在位置： " + mid);
            console.log("第 " + step + " 步時找到");
            return mid;
        }
    }

    console.log("數列中找不到 " + target);
    return -1;
}

let numbers1 = [
    9, 12, 15, 18, 19, 20, 22, 25, 26, 33, 37, 38, 41, 47, 47, 50, 55, 57, 60, 68, 80, 87, 90, 98, 100, 103, 108,
    109, 109, 116, 120, 120, 124, 127, 128, 131, 135, 135, 139, 143, 145, 151, 155, 156, 158, 163, 164, 165, 169, 169,
    173, 174, 176, 177, 178, 181, 182, 182, 183, 184, 189, 192, 195, 200, 201, 203, 204, 207, 213, 217, 222, 222, 222,
    227, 228, 233, 235, 237, 239, 239, 243, 248, 251, 252, 257, 260, 260, 263, 268, 270, 271, 271, 276, 281, 284, 285,
    295, 297, 298,
];
let numbers2 = [9, 12, 15, 18, 19, 20, 22, 25, 26, 33];

binarySearch(numbers1, 19);

function binarySearchClosest(array, target) {
    let min = 0;
    let max = array.length - 1;
    let closest = null;
    let step = 0;

    while (min <= max) {
        step++;
        let mid = Math.floor((min + max) / 2);
        if (target > array[mid]) {
            min = mid + 1;
        } else if (target < array[mid]) {
            max = mid - 1;
        } else if (target === array[mid]) {
            return mid;
        }
        // 更新最接近的值
        if (closest === null || Math.abs(array[mid] - target) < Math.abs(closest - target)) {
            //Math.abs 取絕對值
            closest = array[mid];
            console.log("第 " + step + " 步時找到");
            console.log("最接近的值:", closest);
        }
    }

    return closest;
}

let numbers = [9, 12, 15, 18, 19, 20, 22, 25, 26, 26, 33];
const target = 21;

binarySearchClosest(numbers, target);

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

function counter(array, target) {
    let targetIndex = binarySearch(array, target);

    if (targetIndex === -1) {
        console.log("數列中找不到 " + target);
        return 0;
    }

    let counter = 1; //至少有一個

    //向左找
    let left = targetIndex - 1;
    while (left >= 0 && array[left] === target) {
        counter++;
        left--;
    }
    //向右找
    let right = targetIndex + 1;
    while (right < array.length && array[right] === target) {
        counter++;
        right++;
    }

    console.log("數列中第一個出現的位置 " + (left + 1));
    console.log("數列中最後出現的位置 " + (right - 1));
    console.log("目標：" + target + " 總共有 " + counter + "個");
}

let numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
const target = 4;
counter(numbers, target);

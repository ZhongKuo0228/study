function binarySearchLeftmost(array, target) {
    let min = 0;
    let max = array.length - 1;
    let result = -1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);

        if (array[mid] >= target) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }

        if (array[mid] === target) {
            result = mid;
        }
    }

    return result;
}

function binarySearchRightmost(array, target) {
    let min = 0;
    let max = array.length - 1;
    let result = -1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);

        if (array[mid] <= target) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }

        if (array[mid] === target) {
            result = mid;
        }
    }

    return result;
}

function logNSolution(array, target) {
    const leftmostIndex = binarySearchLeftmost(array, target);
    const rightmostIndex = binarySearchRightmost(array, target);

    if (leftmostIndex === -1 || rightmostIndex === -1) {
        console.log("數列中找不到 " + target);
        return 0;
    }

    const count = rightmostIndex - leftmostIndex + 1;

    console.log("數列中第一個出現的位置 " + leftmostIndex);
    console.log("數列中最後出現的位置 " + rightmostIndex);
    console.log("目標：" + target + " 總共有 " + count + "個");
}

let numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
const target = 4;
logNSolution(numbers, target);

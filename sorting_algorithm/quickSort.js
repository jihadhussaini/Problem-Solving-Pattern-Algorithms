function pivot(arr, start = 0, end = arr.length+1){ 
    let pivot = arr[start];
    let pivot_idx = start;

    function helper_swap(swapArr, first_idx, second_idx) {
        let temp = swapArr[first_idx];
        swapArr[first_idx] = swapArr[second_idx];
        swapArr[second_idx] = temp;
    }

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            pivot_idx++;
            helper_swap(arr, pivot_idx, i);
        }
    }
    helper_swap(arr, start, pivot_idx);
    
    return pivot_idx;
}

function quickSort (arr, left = 0, right = arr.length - 1) {
    // let left = 0;
    // let right = arr.length - 1;

    // base case
    if (left < right) {
        let pivotIndex = pivot (arr, left, right);

        // left
        quickSort (arr, left, pivotIndex - 1);
        // right
        quickSort (arr, pivotIndex + 1, right);
    }

    return arr;
}

let arr = [4,8,2,1,5,7,6,3];

// console.log(pivot(arr));
console.log(quickSort(arr));
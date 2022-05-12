// function pivot (arr) {   
function pivot(arr, start=0, end=arr.length+1){ 
    // let start = 0;
    // let end = arr.length -1;
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

let arr = [4,8,2,1,5,7,6,3];

console.log(pivot(arr));
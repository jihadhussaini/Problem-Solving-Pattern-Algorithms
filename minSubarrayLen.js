function minSubarrayLen (arr, sum) {
    let minLength = arr.length + 1;
    let total = 0;
    let start = 0;
    let end = 0;
    
    while (start < arr.length) {
        if(total < sum && end < arr.length){
          total += arr[end];
                end++;
        }
        else if(total >= sum){
            minLength = Math.min(minLength, end-start);
                total -= arr[start];
                start++;
        } 
        else {
          break;
        }
    }
    return minLength === arr.length + 1 ? 0 : minLength;
}

console.log(minSubarrayLen([2,3,1,2,4,3], 7)); // 2
console.log(minSubarrayLen([2,1,6,5,4], 9)); // 2
console.log(minSubarrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1
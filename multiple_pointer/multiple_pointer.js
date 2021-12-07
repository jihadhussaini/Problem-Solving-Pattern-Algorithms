function countUniqueValue (arr) {
    let counter = 0;
    if (arr.length === 0) {
        return 0;
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[counter] !== arr[i]) {
             counter++;
             arr[counter] = arr[i];
        }
    }
    return counter + 1;
}

// console.log(countUniqueValue([1,1,2,2,3,3,3,4]));
// console.log(countUniqueValue([-2,-1,0,3,5,7]));
// console.log(countUniqueValue([]))
// console.log(countUniqueValue([-2,-1,0,3,5,7,10,10,15,29]));
// console.log(countUniqueValue([1]))
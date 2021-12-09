/*
Multiple Pointers - countUniqueValues

Implement a function called countUniqueValues, which accepts a sorted array, and counts
the unique values in the array. There can be negative numbers in the array, but it will always
be sorted.
countUniqueValues([1,1,1,1,1,2) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13) // 7
countUniqueValues([)) // 0
countUniqueValues([-2,-1,-1,0,1) // 4

Time Complexity - O(n)
Space Complexity - O(n)
Bonus :
You must do this with constant or O(1) space and O(n) time.
*/

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
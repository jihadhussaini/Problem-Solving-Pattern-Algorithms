function mergeArray (arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j]);
            j++; 
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort (arr) {
    // base case
    if (arr.length <= 1) return arr;

    // set midpoint to split arr into half
    let mid = Math.floor(arr.length/2);

    // set left & right then break into the smallest individual array
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    // merge the array
    return mergeArray(left, right);
}

console.log(mergeSort([34,20,76,73])); // [20,34,73,76]
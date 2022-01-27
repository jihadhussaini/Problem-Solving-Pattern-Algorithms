function averagePair (arr, num) {
    let a = 0;
    let b = arr.length - 1;

    if (arr.length === 0) return false;

    while (a < b) {
        let average = (arr[a] + arr[b]) / 2;
        if (average === num) {
            return true;
        } else if (average > num) {
            b--;
        } else a++;
    }
    return false
}

console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([], 4));
// 1. sameFrequency

function sameFrequency(num1, num2) {
    // ubah jadi string
    let str1 = num1.toString();
    let str2 = num2.toString();

    // cek if length beda return false
    if (str1.length !== str2.length) return false;

    // bikin 2 object buat compare freq counternya
    let freqCount1 = {};
    let freqCount2 = {};

    // loop
    for (let val of str1) {
        freqCount1[val] = (freqCount1[val] || 0) + 1;
    }
    for (let val of str2) {
        freqCount2[val] = (freqCount2[val] || 0) + 1;
    }
    
    for (let val in freqCount1) {
        if (!(val in freqCount2)) {
            return false
        }
        if (freqCount2[val] !== freqCount1[val]) {
            return false
        }
    }
    return true;
}

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));


// 2. are There Duplicates

// 2A -> using frequencyCounter
function areThereDuplicates() {
    let temp = {};
    for (let val in arguments) {
        temp[arguments[val]] = (temp[arguments[val]] || 0) + 1;
    }
    
    for (let key in temp) {
        if (temp[key] > 1) {
            return true
        }
    }
    return false
}

// 2B -> using multiplePointer
function areThereDuplicates(... args) {
    // sort dulu
    args.sort();

    let pointer1 = 0;
    for (let pointer2 = 1; pointer2 < args.length; pointer2++) {
        if (args[pointer2] === args[pointer1]) {
            return true;
        }
        pointer1++;
    }
    return false;
}

// console.log(areThereDuplicates(3,2,1));
// console.log(areThereDuplicates(2,2,1));
// console.log(areThereDuplicates('a', 'b', 'c', 'a'));
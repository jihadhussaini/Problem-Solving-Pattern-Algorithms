function sameFrequency (n1, n2) {
    // ubah ke string
    let str1 = n1.toString();
    let str2 = n2.toString();
    // cek length
    if (str1.length !== str2.length) {
        return false
    }
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
        if (freqCount2[val] != freqCount1[val]) {
            return false
        }
    }
    return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
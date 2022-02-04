function findLongestSubstring (str) {
    let start = 0;
    let theLength = 0;
    let obj = {}
    
    for (let i = 0; i < str.length; i++) {
        let charact = str[i];
        let check = obj[charact];
        if (obj[charact]) {
            start = Math.max(start, obj[charact]);
        }
        console.log(`check = ${check}`)
        console.log(`start = ${start}`)
        // console.log(obj[charact])

        theLength = Math.max(theLength, i - start + 1);
        obj[charact] = i+1;
        console.log(`theLength = ${theLength}`)
    }
    return theLength;
}

// console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
// console.log(findLongestSubstring('thisisawesome')); // 6
// console.log(findLongestSubstring('thecatinthehat')); // 7
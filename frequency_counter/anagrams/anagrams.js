/*
Frequency Counter - validAnagram

Given two strings, write a function to determine if the second string is an anagram of the
first. An anagram is a word, phrase, or name formed by rearranging the letters of another,
such as cinema, formed from iceman.
Examples:
validAnagram('','') / true
validAnagram('aaz', 'zza') // false
validAnagram('anagram','nagaram' ) // true
validAnagram("rat", "car") // false) // false
validAnagram('awesome',"awesom") // false
validAnagram(' amanaplanacanalpanama', 'acanalmanplanpamana" )// false
validAnagram(' qwerty', 'geywrt") // true
validAnagram('texttwisttime', "timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets.
Time Complexity - O(n)
*/

function validAnagrams (str1, str2) {
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
    // console.log(freqCount1)
    // console.log(freqCount2)
    
    for (let val in freqCount1) {
        if (!(val in freqCount2)) {
            return false
        }
        if (freqCount2[val] !== freqCount1[val]) {
            return false
        }
    }
    return true
}

console.log(validAnagrams("aazff", "azzfz"));
console.log(validAnagrams("jihad", "dahij"));

// idrus' solution
/*
function validAnagram(s1, s2) {
    if (s1.length != s2.length) return false;
  
    let fc1 = {};
    let fc2 = {};
  
    for (let char of s1) {
      fc1[char] = (fc1[char] || 0) + 1;
    }
  
    for (let char of s2) {
      fc2[char] = (fc2[char] || 0) + 1;
    }
  
    for (let key in fc1) {
        // check if there's a key in both fc1 & fc2
        // OR
        // if any, check whether the char count is same
  
      if (!(key in fc2) || (fc2[key] !== fc1[key])) return false;
    }
  
    return true;
  }
*/
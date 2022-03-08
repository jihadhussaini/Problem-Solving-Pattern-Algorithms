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

// 3 averagePairs
// Multiple Pointer problems

function averagePair (arr, num) {
    let a = 0;
    let b = arr.length - 1;

    if (arr.length === 0) return false;

    while (a < b) {
        let avg = (arr[a] + arr[b]) / 2;
        if (avg === num) return true;
        else if (avg < num) a++;
        else b--;
    }
    return false;
}

// console.log(averagePair([1,2,3], 2.5));
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));
// console.log(averagePair([-1,0,3,4,5,6], 4.1));
// console.log(averagePair([], 4));

// 4 isSubsequences
// Multiple Pointer problems

function isSubsequences (str1, str2) {
    let a = 0;
    let b = 0;

    while (b < str2.length) {
        if (str2[b] === str1[a]) a++;
        if (a === str1.length) return true;
        b++;
    }
    return false;
}

// console.log(isSubsequences('hello', 'hello world'));
// console.log(isSubsequences('sing', 'sting'));
// console.log(isSubsequences('abc', 'abracadabra'));
// console.log(isSubsequences('abc', 'acb'));


// 5. maxSubarraySum
function maxSubarraySum(arr, num) {
    let max = 0;
    let temp = 0;

    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        max += arr[i]
    }
    temp = max;

    for (let i = num; i < arr.length; i++) {
        temp = temp - arr[i-num] + arr[i];
        max = Math.max(max, temp)
    }
    return max;
}

// console.log(maxSubarraySum([100,200,300,400], 2));
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));
// console.log(maxSubarraySum([3,-2,7,-4,1-1,4,-2,1], 2));
// console.log(maxSubarraySum([2,3], 3));

// 6. minSubarrayLen
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

// console.log(minSubarrayLen([2,3,1,2,4,3], 7)); // 2
// console.log(minSubarrayLen([2,1,6,5,4], 9)); // 2
// console.log(minSubarrayLen([-3,4,0,-2,6,-1], 2));
// console.log(minSubarrayLen([3,-2,7,-4,1-1,4,-2,1], 2));
// console.log(minSubarrayLen([2,3], 3));

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }

// 7. Longest Sub String
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

// console.log(findLongestSubstring('')); // 0
// console.log(findLongestSubstring('rithmschool')); // 7
// console.log(findLongestSubstring('thisisawesome')); // 6

// Recursion
// Power
function power (baseNum, exp) {
  if (exp === 0) return 1;
  return baseNum * power (baseNum, exp-1);
}

// Factorial
function factorial (num) {
  if(num <= 1) return 1;
  return num * factorial(num-1);
}

// product of Array
function productOfArray(arr) {
  if(arr.length === 0) {
      return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

// recursive range
function recursiveRange(x){
  if (x === 0 ) return 0;
  return x + recursiveRange(x-1);
}

// fibonacci 
function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

// reverse 
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

// isPalindrome
function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}

// some Recursive
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}

// Flatten
function flatten(oldArr){
  let newArr = []
  	for(let i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}
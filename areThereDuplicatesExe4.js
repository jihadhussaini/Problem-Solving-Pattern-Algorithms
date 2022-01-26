// freq counter
function areThereDuplicates() {
    let temp = {};
    for (let val in arguments) {
        temp[arguments[val]] = (temp[arguments[val]] || 0) + 1;
    }

    for (let key in temp) {
        if (temp[key] > 1) {
            return true;
        }
    }
    return false;
}

// multiple pointer
function areThereDuplicates(...inputs) {
    // sort dulu
    inputs.sort();

    let pointer1 = 0
    for (let pointer2 = 1; pointer2 < inputs.length; pointer2++) {
        if (inputs[pointer2] === inputs[pointer1]) {
            return true;
        }
        pointer1++;
    }
    return false;
}

console.log(areThereDuplicates(3,2,1));
console.log(areThereDuplicates(2,2,1));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));

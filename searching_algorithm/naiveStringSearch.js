function naiveStringSearch (str1, str2) {
    let counter = 0;

    for (let a = 0; a < str1.length; a++) {
        for (let b = 0; b < str2.length; b++) {
            // break the inner loop if any characters don't match
            if (str1[a] !== str2[b]) break;
            // inner loop is complete, increment the count
            if (b === str2.length - 1) counter++;
            // continue check the next char
            a++;
        }
    }

    return counter;
}

console.log(naiveStringSearch('zftomgkertomg', 'omg'));
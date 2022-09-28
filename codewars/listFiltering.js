function filter_list (l) {
    let filter = [];
    for (let i = 0; i<l.length; i++) {
        if (typeof l[i] == "number") {
            let isInclude = filter.includes(l[i]);
            if (isInclude == false) {
                filter.push(l[i])
            }
        }
    }

    return filter;
}

console.log(filter_list([1,2,'a','b'])) // == [1,2]
console.log(filter_list([1,'a','b',0,15])) // == [1,0,15]
console.log(filter_list([1,2,'aasf','1','123',123])) // == [1,2,123]
console.log(filter_list(["a", "b", "1"])) // = expected [ ]
console.log(filter_list(["656", 157, "", "", 889, 704, 271, "969", "3c"])) // = expected [ 157, 889, 704, 271 ]
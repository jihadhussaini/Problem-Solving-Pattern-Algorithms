function collectStrings (obj) {
    let contain = []

    function helper (obj) {
        // base case
        if (!Object.keys(obj).length) return;
      
        let values = Object.values(obj);

        // if an object recursive it
        if (typeof values[0] === "object") {
            helper(values[0])
          }
        
        // if string then push it
        if (typeof values[0] == "string") {
            contain.push(values[0])
          }
        
        delete obj[Object.keys(obj)[0]];
        
        return helper(obj);
    }
    helper(obj);

    return contain;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])
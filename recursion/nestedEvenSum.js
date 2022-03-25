function nestedEvenSum (obj) {
  let sum = 0

  function helper (obj) {
    // base case
    if (!Object.keys(obj).length) return;

    let values = Object.values(obj);

    // if an object recursive it
    if (typeof values[0] === "object") {
      helper(values[0])
    }

    // if even number then sum it
    if (values[0] % 2 == 0) {
      sum += values[0];
    }

    // remove the first property in the object
    delete obj[Object.keys(obj)[0]];

    return helper(obj);
  }

  helper(obj);

  return sum;
}
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  nestedEvenSum(obj1); // 6
  nestedEvenSum(obj2); // 10
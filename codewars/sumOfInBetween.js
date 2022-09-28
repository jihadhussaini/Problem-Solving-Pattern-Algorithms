function getSum( a,b )
{
    let counter = 0;
    if (a !== b) {
        if (a > b) {
            for (let i = b; i <= a; i++) {
                counter += i;
            }
            return counter;
        }
        if (a < b) {
            for (let i = a; i <= b; i++) {
                counter += i;
            }
            return counter;
        }
    } else {
        return a;
    }
}

console.log(getSum(1, 0))//(1, 0) --> 1 (1 + 0 = 1)
console.log(getSum(1, 2))// (1, 2) --> 3 (1 + 2 = 3)
console.log(getSum(0, 1))// (0, 1) --> 1 (0 + 1 = 1)
console.log(getSum(1, 1)) // (1, 1) --> 1 (1 since both are same)
console.log(getSum(-1, 0))// (-1, 0) --> -1 (-1 + 0 = -1)
console.log(getSum(-1, 2)) // --> 2 (-1 + 0 + 1 + 2 = 2)
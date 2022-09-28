function isSquare (n) {
    if (Math.ceil(Math.sqrt(n)) == Math.floor(Math.sqrt(n))) {
        return true;
    } else {
        return false;
    }
}

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(16));
console.log(isSquare(25));
console.log(isSquare(26));
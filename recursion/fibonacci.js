function fibonacci (num) {
    if (num <= 2) return 1;
    return fibonacci (num-1) + fibonacci (num-2);
}

console.log(fibonacci(4));
console.log(fibonacci(10));
console.log(fibonacci(28));
console.log(fibonacci(35));

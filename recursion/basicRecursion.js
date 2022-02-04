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
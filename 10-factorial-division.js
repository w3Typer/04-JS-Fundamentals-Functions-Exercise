function printFactorialDevision(num1, num2) {
  function getFactorial(n) {
    let result = 1;
    for (i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  let factorial1 = getFactorial(num1);
  let factorial2 = getFactorial(num2);

  console.log((factorial1 / factorial2).toFixed(2));
}

printFactorialDevision(5, 2);
// 60.00
printFactorialDevision(6, 2);
// 360.00

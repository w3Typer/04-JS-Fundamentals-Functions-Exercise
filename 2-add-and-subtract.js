function sumAndSubtractNums(num1, num2, num3) {
  function sum(n1, n2) {
    let sumResult = n1 + n2;
    return sumResult;
  }

  function subtract(m1, m2) {
    let subtractionResult = m1 - m2;
    return subtractionResult;
  }

  console.log(subtract(sum(num1, num2), num3));
}

sumAndSubtractNums(23, 6, 10);
// 19
sumAndSubtractNums(1, 17, 30);
// -12
sumAndSubtractNums(42, 58, 100);
// 0

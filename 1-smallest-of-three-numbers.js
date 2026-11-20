function printTheSmallestOfThreeNumbers(num1, num2, num3) {
  let tempNum = 0;
  let result = 0;

  function returnSmallerNumber(n1, n2) {
    if (n1 < n2) {
      return n1;
    } else {
      return n2;
    }
  }

  tempNum = returnSmallerNumber(num1, num2);
  result = returnSmallerNumber(tempNum, num3);

  console.log(result);
}

printTheSmallestOfThreeNumbers(2, 5, 3);
// 2
printTheSmallestOfThreeNumbers(600, 342, 123);
// 123

printTheSmallestOfThreeNumbers(25, 21, 4);
// 4
printTheSmallestOfThreeNumbers(2, 2, 2);
// 2

function calculateOddAndEvenElementsSum(num) {
  let str = String(num);
  let digitsCount = str.length;
  let oddSum = 0;
  let evenSum = 0;

  for (i = 0; i < digitsCount; i++) {
    if (str[i] % 2 !== 0) oddSum += Number(str[i]);
    else evenSum += Number(str[i]);
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

calculateOddAndEvenElementsSum(1000435);
//  Odd sum = 9, Even sum = 4
calculateOddAndEvenElementsSum(3495892137259234);
//  Odd sum = 54, Even sum = 22

function checkIfNumIsPerfect(num) {
  let sumOfRightDigits = 0;
  for (i = 1; i <= num / 2; i++) {
    if (num % i === 0) sumOfRightDigits += i;
  }

  if (sumOfRightDigits === num) {
    console.log('We have a perfect number!');
  } else {
    console.log("It's not so perfect.");
  }
}

checkIfNumIsPerfect(6);
// We have a perfect number!
checkIfNumIsPerfect(28);
// We have a perfect number!
checkIfNumIsPerfect(1236498);
// It's not so perfect.

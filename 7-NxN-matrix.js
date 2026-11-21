function printNxNMatrix(num) {
  let arr = [];

  for (i = 1; i <= num; i++) {
    arr.push(num);
  }
  for (j = 1; j <= num; j++) {
    console.log(arr.join(' '));
  }
}

printNxNMatrix(3);
// 3 3 3
// 3 3 3
// 3 3 3
printNxNMatrix(7);
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
printNxNMatrix(2);
// 2 2
// 2 2

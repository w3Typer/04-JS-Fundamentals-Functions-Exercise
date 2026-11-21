function printPolindromOrNot(arr) {
  for (i = 0; i < arr.length; i++) {
    let str = String(arr[i]);
    let strRev = str.split('').reverse().join('');

    let result = str === strRev ? 'true' : 'false';

    console.log(result);
  }
}

printPolindromOrNot([123, 323, 421, 121]);
// false
// true
// false
// true
printPolindromOrNot([32, 2, 232, 1010]);
// false
// true
// true
// false

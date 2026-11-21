function validateThePassword(str) {
  let isLengthValid = true;
  let isContentCorrect = true;
  let areDigitsEnough = true;
  let digitsCount = 0;

  if (str.length >= 6 && str.length <= 10) {
    isLengthValid = true;
  } else {
    isLengthValid = false;
  }

  for (i = 0; i < str.length; i++) {
    if (
      (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) ||
      (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ||
      (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
    ) {
      isContentCorrect = true;
    } else {
      isContentCorrect = false;
      break;
    }
  }

  for (i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
      digitsCount++;
    }
  }
  if (digitsCount < 2) {
    areDigitsEnough = false;
  }

  if (isLengthValid && isContentCorrect && areDigitsEnough) {
    console.log('Password is valid');
  }
  if (!isLengthValid) {
    console.log('Password must be between 6 and 10 characters');
  }
  if (!isContentCorrect) {
    console.log('Password must consist only of letters and digits');
  }
  if (!areDigitsEnough) {
    console.log('Password must have at least 2 digits');
  }
}

validateThePassword('logIn');
// Password must be between 6 and 10 characters
// Password must have at least 2 digits
validateThePassword('MyPass123');
// Password is valid
validateThePassword('Pa$s$s');
// Password must consist only of letters and digits
// Password must have at least 2 digits

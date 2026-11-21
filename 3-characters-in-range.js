function printAsciiCharactersInRange(str1, str2) {
  let code1 = str1.charCodeAt(0);
  let code2 = str2.charCodeAt(0);
  let smallerCode = code1 < code2 ? code1 : code2;
  let biggerCode = code1 < code2 ? code2 : code1;
  let arrResult = [];

  for (let i = smallerCode + 1; i < biggerCode; i++) {
    arrResult.push(String.fromCharCode(i));
  }

  console.log(arrResult.join(' '));
}

printAsciiCharactersInRange('a', 'd');
// b c
printAsciiCharactersInRange('#', ':');
// $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
printAsciiCharactersInRange('C', '#');
// $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B

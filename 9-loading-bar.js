function createLoadingBar(num) {
  let fullBarChars = num / 10;
  let emptyBarChars = (100 - num) / 10;
  let arrFullChars = [];
  let arrEmptyChars = [];

  for (i = 0; i < fullBarChars; i++) {
    arrFullChars.push('%');
  }

  for (j = 0; j < emptyBarChars; j++) {
    arrFullChars.push('.');
  }

  if (num === 100) {
    console.log('100% Complete!');
    console.log(`[${arrFullChars.join('')}]`);
  } else {
    console.log(`${num}% [${arrFullChars.join('')}${arrEmptyChars.join('')}]`);
    console.log('Still loading...');
  }
}

createLoadingBar(30);
// 30% [%%%.......]
// Still loading...
createLoadingBar(50);
// 50% [%%%%%.....]
// Still loading...
createLoadingBar(100);
// 100% Complete!
// [%%%%%%%%%%]

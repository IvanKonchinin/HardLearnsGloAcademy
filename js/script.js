"use strict";
// 1)
let arr = ['256', '387', '478', '987', '298', '745', '468'];

for (let i = 0; i < arr.length; i++){
  if(arr[i].substring(0,1) === '2' || arr[i].substring(0,1) === '4'){
  console.log(arr[i]);
  }
}

// 2)
let n = 100;

nextStep:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j === 0){
      continue nextStep;
    }
  }
  console.log(i + ' - Делители этого числа: ' + 1 + ' и ' + i);
}
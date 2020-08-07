let num = 266219;
let numString = num.toString();
let numArray = numString.split('');
let result = 1;
let out = document.querySelector('.span');
for (let i = 0; i < numArray.length; i++){
  result *= numArray[i]; 
}

console.log(result); //умножение чисел друг на друга

result = result ** 3; //возведение в третью степень

result = result.toString();
result = result.substring(0,2);

out.textContent = result;


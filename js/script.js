"use strict";
const clearMessage = function (data) {
  if(typeof(data) !== 'string'){
    alert('Вы указали не строчное значение!');
    return;
  }
  let newStr = data.trim();
  
  if (newStr.length > 30){
    newStr = newStr.substring(30, -1);
  }
  console.log(newStr + '...');
};

clearMessage('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');


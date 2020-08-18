"use strict";
function clock() {

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let months = ['Декабря', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Августа', 'Сентября', 'Октября', 'Ноября'];
let date = new Date();
let currentDayOfMonth = date.getDate();
let currentDay = date.getDay();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
let currentHours = date.getHours();
let currentMinuts = date.getMinutes();
let currentSeconds = date.getSeconds();
let format1 = document.querySelector('.format1');
let format2 = document.querySelector('.format2');

const hourses = ['час', 'часа', 'часов'];
const minutes = ['минута', 'минуты', 'минут'];
const seconds = ['секунда', 'секунды', 'секунд'];

const declinationWords = function (num, arrText) {
  if (num % 10 === 1 && num % 100 !== 11) {
    return arrText[0];
  } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
    return arrText[1];
  }
  return arrText[2];
};

const addZero = function(num){
  if(num < 10){
    num = '0' + num;
  }
  return num;
};

format1.textContent = `Сегодня ${week[currentDay]}, ${currentDayOfMonth} ${months[currentMonth]} ${currentYear} года, ${addZero(currentHours)} ${declinationWords(currentHours, hourses)} ${addZero(currentMinuts)} ${declinationWords(currentMinuts, minutes)} ${addZero(currentSeconds)} ${declinationWords(currentSeconds, seconds)}`;
format2.textContent = `${addZero(currentDayOfMonth)}.${(addZero(currentMonth + 1))}.${currentYear} - ${addZero(currentHours)}:${addZero(currentMinuts)}:${addZero(currentSeconds)}`;
}

setInterval(clock, 1000);






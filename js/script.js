"use strict";

function weekDays(){

  let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  let currentDay = (new Date().getDay() === 0) ? 6 : new Date().getUTCDay();
  let out = document.querySelector('.out');
  console.log(currentDay);

  function weekDaysFunc(){
    for (var i = 0; i < week.length; ++i) {
        if(i === currentDay){
          if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
            out.innerHTML += '<b><i>' + week[i] + '</i></b><br>';
          }
          else if (i === currentDay) {
            out.innerHTML += '<b>' + week[i] + '</b>' + '<br>';
          }
          else{
            out.innerHTML += week[i] + '<br>';
          }
        }
        else if (week[i] === 'Суббота' || week[i] === 'Воскресенье'){
          out.innerHTML += '<i>' + week[i] + '</i><br>';
        }
        else {
          out.innerHTML += week[i] + '<br>';
        }
    }
  }  
  return weekDaysFunc();
}

weekDays();
// let currentDay = new Date();
// console.log(currentDay.toLocaleString('ru-RU', { hour12: false }));
// console.dir(currentDay.getDay());
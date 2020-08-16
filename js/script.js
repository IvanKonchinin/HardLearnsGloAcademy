"use strict";

function weekDays(){

  let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  let currentDay = (new Date().getDay() === 0) ? 6 : new Date().getUTCDay();
  let out = document.querySelector('.out');

  function weekDaysFunc(){
    for (var i = 0; i < week.length; ++i) {
        if(i === currentDay){
          if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
            out.innerHTML += '<b><i>' + week[i] + '</i></b><br>';
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
"use strict";

function weekDays(){

  let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  let currentDay = new Date();
  currentDay = currentDay.getDay() - 1;

  function weekDaysFunc(){

    week.forEach(function (item) {

      if(item === 'Суббота' || item === 'Воскресенье'){
        document.querySelector('.out').innerHTML += '<i>' + item + '</i>' + "<br>"; 
      } else if (item === week[currentDay]){
        document.querySelector('.out').innerHTML += '<b>' + item + '</b>' + "<br>"; 
      } else {
        document.querySelector('.out').innerHTML += item + "<br>"; 
      }
    });

  }  
  console.dir(weekDaysFunc);
  return weekDaysFunc();
}

weekDays();



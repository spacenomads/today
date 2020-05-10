const app = document.querySelector('.js__app');





const WEEK = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado'
]




function getNow() {
  return new Date();
}





function getTomorrow(today) {
  return today < 6 ? today + 1 : 0; 
}





function getDay(which) {
  const now = getNow().getDay();
  const day = (which === 'tomorrow') ? now : getTomorrow(now);
  return WEEK[day];
}





function initToday(wrap) {
  const today = wrap.querySelector('.js__today');
  const tomorrow = wrap.querySelector('.js__tomorrow');

  today.innerText = getDay('today');
  tomorrow.innerText = getDay('tomorrow'); 
}





app && initToday(app);
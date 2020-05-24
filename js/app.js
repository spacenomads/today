const app = document.querySelector('.js__app');
const DAYS = 1;
const WEEK = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado'
];
const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];




function getNow() {
  return new Date();
}




function daysInMs(total) {
  return total*24*60*60*1000
}





function formatDay(ISOdate) {
  const day = {};
  day.number = ISOdate.getDate();
  day.name = WEEK[ISOdate.getDay()];
  return `${day.name} ${day.number}`;
}





function getDay(whichDay) {
  const today = getNow();
  const tomorrow = new Date(Date.now() + daysInMs(DAYS));
  const day = (whichDay === 'today') ? today : tomorrow;
  return day;
}




function getCurrentMonthAndYear() {
  const today = getNow();
  const month = today.getMonth();
  const year = today.getFullYear();
  return `${MONTHS[month]} ${year}`;
}





function initToday(wrap) {
  const todayContainer = wrap.querySelector('.js__today');
  const tomorrowContainer = wrap.querySelector('.js__tomorrow');
  const monthContainer = wrap.querySelector('.js__month');

  todayContainer.innerText = formatDay(getDay('today'));
  tomorrowContainer.innerText = formatDay(getDay('tomorrow'));
  monthContainer.innerText = getCurrentMonthAndYear();
}





app && initToday(app);
import moment from "moment";

export function getRangeOfDaysByDate(date) {           // функция генерирующая массив дат , дней 
  const weekStart = moment(date).startOf('isoWeek'); // начало недели от текущей даты 

  const days = [];

  for (let i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, 'days').format());
  }

  return days;
}

export function getRangeOfHoursByDate(date) {      // функция генерирующая массив дат , часов 
  const dayStart = moment(date).startOf('day');    // начало дня 

  const hours = [];

  for (let i = 0; i <= 23; i++) {
    hours.push(moment(dayStart).subtract(-i, "hours").format());            // вытягиваем часы от суток (от 00 00 отнимаем по часу на каждой итерации )
    // hours.push(`${i > 9 ? i : '0' + i}:00`);                          // то же самое , только хардкодом , а не библиотекой 
  }

  return hours;
}



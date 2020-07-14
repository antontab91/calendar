import moment from "moment";

export function getRangeOfDaysByDate(date) {
  const weekStart = moment(date).startOf('isoWeek'); // начало недели от текущей даты 

  const days = [];

  for (let i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, 'days').format());
  }

  return days;
}

export function getRangeOfHoursByDate(date) {
  const dayStart = moment(date).startOf('day');

  const hours = [];

  for (let i = 0; i <= 23; i++) {
    hours.push(moment(dayStart).subtract(-i, "hours").format());
    // hours.push(`${i > 9 ? i : '0' + i}:00`);
  }

  return hours;
}



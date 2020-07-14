import moment from "moment";

export function getWeekByDate(date) {
  const weekStart = moment(date).startOf('isoWeek'); // начало недели от текущей даты 

  const days = [];

  for (let i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, 'days').format());
  }

  return days;
}

export const rangeGenerator = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  };
  return result;
}



import React from 'react';
import moment from 'moment';
import './monthNavigation.scss';

const MounthNavigation = ({
  viewedDate,
  goToNextWeek,
  goToPrevWeek
}) => {

  const weekStart = moment(viewedDate).startOf('isoWeek'); // определяем начало просматривоемой недели 
  const weekEnd = moment(viewedDate).endOf('isoWeek');      // конец 

  let title;

  if (weekStart.isSame(weekEnd, 'month')) {   // проверяем по месяцу , если такой же месяц на конец и на начало показываемой на экране недели 
    title = weekStart.format('MMMM YYYY');    // тогда запись в формате одного месяца 
  } else {
    title = `${weekStart.format('MMM')}-${weekEnd.format('MMM YYYY')}`; // если начало недели одного месяца , а конец другого месяца - то запись тогда в формате 2 месяцев 
  }

  return (
    <div className="mounth-navigation">
      <div className="mounth-navigation__btns-wr">
        <button className="mounth-navigation__btn-left mounth-navigation__btn" onClick={goToPrevWeek}>
          {"<"}
        </button>
        <button className="mounth-navigation__btn-right mounth-navigation__btn" onClick={goToNextWeek}>
          {">"}
        </button>
      </div>
      <div className="mounth-navigation__current-mounth">
        {title}
      </div>
    </div>
  );
}

export default MounthNavigation;
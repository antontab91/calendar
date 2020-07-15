import React from 'react';
import moment from 'moment';
import './monthNavigation.scss';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MounthNavigation = ({
  viewedDate,
  goToNextWeek,
  goToPrevWeek
}) => {

  const weekStart = moment(viewedDate).startOf('isoWeek'); // определяем начало просматривоемой недели ( например Mon Jul 13 2020 00:00:00 GMT+0300)
  const weekEnd = moment(viewedDate).endOf('isoWeek');      // конец начало просматривоемой недели

  console.log(`начало просматриваемой недели ${weekStart}`)

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
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="mounth-navigation__btn-right mounth-navigation__btn" onClick={goToNextWeek}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="mounth-navigation__current-mounth">
        {title}
      </div>
    </div>
  );
}

export default MounthNavigation;
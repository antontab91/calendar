import React from 'react';
import moment from 'moment';
import './monthNavigation.scss';

const MounthNavigation = ({
  viewedDate,
  goToNextWeek,
  goToPrevWeek
}) => {

  const weekStart = moment(viewedDate).startOf('isoWeek');
  const weekEnd = moment(viewedDate).endOf('isoWeek');

  let title;

  if (weekStart.isSame(weekEnd, 'month')) {
    title = weekStart.format('MMMM YYYY');
  } else {
    title = `${weekStart.format('MMM')}-${weekEnd.format('MMM YYYY')}`;
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
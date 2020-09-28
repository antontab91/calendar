import React from 'react';
import moment from "moment";
import { getRangeOfDaysByDate } from "../../../utilites";
import './TableNavigation.scss';

const TableNavigation = ({ currDate, viewedDate }) => {

  const week = getRangeOfDaysByDate(viewedDate);

  return (
    <div className="table-navigation">
      <div className="table-navigation__gmt"></div>
      <nav className="table-navigation__week">
        {week.map((day) => {
          const mDay = moment(day); // преобразовываем в момент обьект , для того чтобы заюзать нужные  методы библиотеки момент 

          const title = mDay.format('ddd');
          const dayNumber = mDay.format('DD');
          const isActive = mDay.isSame(currDate, 'day');  // парамнетр дэй указывает на то что нужно проверять именно дни , не забыть что означает иссейм (срввниваю день с текущей датой )

          return (
            <div key={day} className="table-navigation__day">
              <span className={`table-navigation__day-name ${isActive ? 'current' : ''}`}>{title}</span>
              <span className={`table-navigation__day-date ${isActive ? 'current' : ''}`}>
                <div className="num">{dayNumber}</div>
              </span>
            </div>
          )
        })}
      </nav>
    </div >
  )
}

export default TableNavigation;
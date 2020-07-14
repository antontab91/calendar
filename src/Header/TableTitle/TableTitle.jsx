import React from 'react';
import moment from "moment";
import cn from "classnames";

import { getRangeOfDaysByDate } from "../../utilites";
import './tableTitle.scss';

const today = Date.now();
const week = ['SUN', 'MUN', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];


// const TableNavigation = ({ week, today }) => {
const TableNavigation = ({ currDate, viewedDate }) => {
  const week = getRangeOfDaysByDate(viewedDate);

  console.log({
    week,
    currDate,
    viewedDate
  })

  return (
    <div className="table-navigation">
      <div className="table-navigation__gmt"></div>
      <nav className="table-navigation__week">
        {week.map((day) => {
          const mDay = moment(day); // преобразовываем в момент обьект , для того чтобы заюзать нужные момент методы

          const title = mDay.format('ddd');
          const dayNumber = mDay.format('DD');
          const isActive = mDay.isSame(currDate, 'day');  // парамнетр дэй указывает на то что нужно проверять именно дни 

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
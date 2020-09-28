import React from 'react';
import moment from 'moment';
import './sidebar.scss'
import { getRangeOfHoursByDate } from '../../../utilites';


const Sidebar = () => {
  const hours = getRangeOfHoursByDate(new Date()); // массив часов 

  return (
    <aside className="sidebar">
      {hours.map((hour, index) => {
        return (<div className={`sidebar__hour ${index === 0 ? 'first' : ''}`} key={hour}>
          <span className="sidebar__hour-text">
            {index === 0 ? null : moment(hour).format("HH:mm")}
          </span>
        </div>)
      })}
    </aside>
  )
}


export default Sidebar;
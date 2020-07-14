import React from 'react';
import moment from 'moment';

import { getRangeOfHoursByDate } from '../../utilites';

const hours = getRangeOfHoursByDate(new Date());

class Sidebar extends React.Component {
  render() {

    return (
      <aside className="sidebar">
        {hours.map((hour, index) => {
          return (<div className="sidebar__hour" key={hour}>
            <span className="sidebar__hour-text">{index === 0 ? null : moment(hour).format("HH:mm")}</span>
          </div>)
        })}
      </aside>
    )
  }
}

export default Sidebar;
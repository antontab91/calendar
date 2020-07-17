import React from 'react';
import moment from 'moment';

import Hour from '../Hour/Hour.jsx'
import { getRangeOfHoursByDate } from '../../utilites';



class Day extends React.Component {
  render() {
    const { day, viewedDate, currDate, events } = this.props;

    const hours = getRangeOfHoursByDate(day);

    console.log('day', { hours, events })


    return (
      <div className="table__day">
        {
          hours.map((hour) => {
            const filteredEvents = events.filter(event => moment(new Date(`${event.date} ${event.startTime}`)).isSame(hour, 'hours'));

            return (
              <Hour key={hour} hour={hour} currDate={currDate} events={filteredEvents} />
            )
          })
        }
      </div>
    );
  }
}

export default Day;
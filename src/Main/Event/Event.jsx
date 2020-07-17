import React from 'react';
import moment from 'moment';

import './event.scss';


const Event = ({ hour, event }) => {
  const { date, title, description, startTime } = event;

  const diff = moment(`${date} ${startTime}`).diff(hour, 'minutes');

  const percentOfHour = (diff / 60 * 100).toFixed(0);

  return (
    <div className="event" style={{ top: `${percentOfHour}%` }}>
      <div>date: {date}</div>
      <div>title: {title}</div>
      <div>description: {description}</div>
    </div>)

}

export default Event;
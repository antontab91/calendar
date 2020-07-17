import React from 'react';
import moment from 'moment';

import './redLine.scss';


const RedLine = ({ hour, currDate }) => {
  const diff = moment(currDate).diff(hour, 'minutes');
  const percentOfHour = (diff / 60 * 100).toFixed(0);


  return (
    <div style={{ top: `${percentOfHour}%` }} className="red-line">
      <div className="red-line__orb"></div>
    </div>)
}

export default RedLine;
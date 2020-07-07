import React from 'react';
import './currentDate.scss';

const CurrentDate = () => {
  return (
    <button className="current-date-btn">
      <span className="current-date-btn__text">
        Today
      </span>
    </button>
  )
}

export default CurrentDate;
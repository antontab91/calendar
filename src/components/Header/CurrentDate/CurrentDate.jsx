import React from 'react';
import './currentDate.scss';

const CurrentDate = ({ goToCurrent }) => {

  return (
    <button className="current-date-btn" onClick={goToCurrent}>
      <span className="current-date-btn__text">
        Today
      </span>
    </button>
  )
}

export default CurrentDate;
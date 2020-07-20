import React from 'react';
import moment from 'moment';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './event.scss';


const Event = ({ hour, event, handleDeleteEvent }) => {
  const { date, title, description, startTime, endTime } = event;

  const diff = moment(`${date} ${startTime}`).diff(hour, 'minutes');
  const percentOfHour = (diff / 60 * 100).toFixed(0);

  return (
    <div className="event" style={{ top: `${percentOfHour}%` }}>
      <div className="event__date"> {`${date} ${startTime} - ${endTime} `}</div>
      <div className="event__title"> {title}</div>
      <div className="event__description"> {description}</div>
      <div onClick={() => {
        // console.log(event)
        handleDeleteEvent(event.id)
      }} className="event__delete">
        <FontAwesomeIcon icon={faTrash} />
        <div className="text">delete</div>
      </div>
    </div>)
}

export default Event;
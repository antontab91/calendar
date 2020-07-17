import React from 'react';
import moment from 'moment';
import RedLine from '../RedLine/RedLine';
import Event from '../Event/Event';


const Hour = ({ hour, currDate, events }) => {
  const mHour = moment(hour);
  const isActive = mHour.isSame(currDate, 'hour');

  return (
    <div className="table__hour" >

      {
        isActive ?
          <RedLine hour={hour} currDate={currDate} />
          : null
      }

      {
        events.map((event) => {
          return <Event key={event.id} event={event} hour={hour} />
        })
      }

    </div>
  )

}

export default Hour;
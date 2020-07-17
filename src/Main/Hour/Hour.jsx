import React from 'react';
import moment from 'moment';

import RedLine from '../RedLine/RedLine';
import Event from '../Event/Event';
// import './hour.scss';


class Hour extends React.Component {
  render() {
    const { hour, currDate, events } = this.props;

    const mHour = moment(hour);

    const isActive = mHour.isSame(currDate, 'hour');

    // if (events.length > 0) {
    //   console.log(events)
    // }

    // const diff = moment(currDate).diff(hour, 'minutes');

    // const percentOfHour = (diff / 60 * 100).toFixed(0);

    return (
      <div className="table__hour" >

        {
          isActive ? <RedLine hour={hour} currDate={currDate} />
            : null}

        {events.map(event => {
          return (<Event key={event.id} event={event} hour={hour} />
          )
        })}
      </div>
    )
  }
}

export default Hour;
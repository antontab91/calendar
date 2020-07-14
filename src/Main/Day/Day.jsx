import React from 'react';
import { rangeGenerator } from '../../utilites'
import Hour from '../Hour/Hour.jsx'


class Day extends React.Component {
  render() {
    return (
      <div className="table__day">
        {
          rangeGenerator(0, 23).map((hour) => {
            return (
              <Hour key={hour} />
            )
          })
        }
      </div>
    );
  }
}

export default Day;
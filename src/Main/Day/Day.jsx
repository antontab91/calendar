import React from 'react';
import rangeGenerator from '../../utilites'
import Hour from '../Hour/Hour.jsx'


class Day extends React.Component {
  render() {
    return (
      <div className="table__day">
        {
          rangeGenerator(0, 6).map((day) => {
            return (
              <Hour key={Math.random()} />                                  // не забыть поменять ключи
            )
          })
        }
      </div>
    );
  }
}

export default Day;
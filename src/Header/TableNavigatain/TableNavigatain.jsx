import React from 'react';

const TableNavigatain = () => {
  return (
    <div className="table-navigation">
      <div className="table-navigation__gmt"></div>
      <nav className="table-navigation__week">
        <div className="table-navigation__day">
          <span className="table-navigation__day-name current">SUN</span>
          <span className="table-navigation__day-date current">
            <div className="num">1</div>
          </span>
        </div>
        <div className="table-navigation__day">
          <span className="table-navigation__day-name">MUN</span>
          <span className="table-navigation__day-date">
            <div className="num">2</div>
          </span>
        </div>
        <div className="table-navigation__day">
          <span className="table-navigation__day-name">TUE</span>
          <span className="table-navigation__day-date">
            <div className="num">3</div>
          </span>
        </div>
        <div className="table-navigation__day">
          <span className="table-navigation__day-name">WED</span>
          <span className="table-navigation__day-date">
            <div className="num">4</div>
          </span>
        </div>
        <div className="table-navigation__day">
          <span className="table-navigation__day-name">THU</span>
          <span className="table-navigation__day-date">
            <div className="num">5</div>
          </span>
        </div>
        <div className="table-navigation__day">
          <span className="table-navigation__day-name">FRI</span>
          <span className="table-navigation__day-date">
            <div className="num">6</div>
          </span>
        </div>
        <div className="table-navigation__day">
          <span className="table-navigation__day-name">SAT</span>
          <span className="table-navigation__day-date">
            <div className="num">7</div>
          </span>
        </div>
      </nav>
    </div>
  )
}

export default TableNavigatain;
import React from "react";
import Calendar from "./Calendar";

const App = () => {
  return (
    <div className="calendar">
      <header className="header">
        <div className="main-navigatin">
          <button className="add-btn">
            <span className="add-btn__icon">
              {"+"}
            </span>
            <span className="add-btn__text">
              Create
            </span>
          </button>
          <button className="current-date-btn">
            <span className="current-date-btn__text">
              Today
            </span>
          </button>
          <div className="mounth-navigation">
            <div className="mounth-navigation__btns-wr">
              <button className="mounth-navigation__btn-left">
                {"<"}
              </button>
              <button className="mounth-navigation__btn-right">
                {">"}
              </button>
            </div>
            <div className="current-mounth">
              JUN2020
            </div>
          </div>
        </div>
        <nav className="week-navigatin">
          <div className="week-navigatin__day">
            <span className="day-name">SUN</span>
            <span className="day-date">1</span>
          </div>
          <div className="week-navigatin__day">
            <span className="day-name">MUN</span>
            <span className="day-date">2</span>
          </div>
          <div className="week-navigatin__day">
            <span className="day-name">TUE</span>
            <span className="day-date">3</span>
          </div>
          <div className="week-navigatin__day">
            <span className="day-name">WED</span>
            <span className="day-date">4</span>
          </div>
          <div className="week-navigatin__day">
            <span className="day-name">THU</span>
            <span className="day-date">5</span>
          </div>
          <div className="week-navigatin__day">
            <span className="day-name">FRI</span>
            <span className="day-date">6</span>
          </div>
          <div className="week-navigatin__day">
            <span className="day-name">SAT</span>
            <span className="day-date">7</span>
          </div>
        </nav>
      </header>
      <div className="main">
        <aside className="time-sidebar">
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">00:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">01:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">02:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">03:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">04:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">05:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">06:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">07:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">08:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">09:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">10:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">11:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">12:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">13:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">14:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">15:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">16:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">17:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">18:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">19:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">20:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">21:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">22:00</span>
          </div>
          <div className="time-sidebar__hour">
            <span className="time-sidebar__hour-text">23:00</span>
          </div>
        </aside>
        <div className="calendar">
          <div className="calendar-day"></div>
        </div>
      </div>
      <div className="pop-up"></div>
    </div>
  );
};

export default App;

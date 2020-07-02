import React from "react";
import Calendar from "./Calendar";
import './index.scss'

const App = () => {
  return (
    <div className="calendar">
      <header className="header">
        <div className="main-navigatin">
          <button className="add-btn">
            <div className="add-btn__wr">
              <span className="add-btn__icon">
                {"+"}
              </span>
              <span className="add-btn__text">
                Create
            </span>
            </div>
          </button>
          <button className="current-date-btn">
            <span className="current-date-btn__text">
              Today
            </span>
          </button>
          <div className="mounth-navigation">
            <div className="mounth-navigation__btns-wr">
              <button className="mounth-navigation__btn-left mounth-navigation__btn">
                {"<"}
              </button>
              <button className="mounth-navigation__btn-right mounth-navigation__btn">
                {">"}
              </button>
            </div>
            <div className="mounth-navigation__current-mounth">
              JUN2020
            </div>
          </div>
        </div>
        <nav className="week-navigatin">
          <div className="week-navigatin__day">
            <span className="week-navigatin__day-name current">SUN</span>
            <span className="week-navigatin__day-date current">1</span>
          </div>
          <div className="week-navigatin__day">
            <span className="week-navigatin__day-name">MUN</span>
            <span className="week-navigatin__day-date">2</span>
          </div>
          <div className="week-navigatin__day">
            <span className="week-navigatin__day-name">TUE</span>
            <span className="week-navigatin__day-date">3</span>
          </div>
          <div className="week-navigatin__day">
            <span className="week-navigatin__day-name">WED</span>
            <span className="week-navigatin__day-date">4</span>
          </div>
          <div className="week-navigatin__day">
            <span className="week-navigatin__day-name">THU</span>
            <span className="week-navigatin__day-date">5</span>
          </div>
          <div className="week-navigatin__day">
            <span className="week-navigatin__day-name">FRI</span>
            <span className="week-navigatin__day-date">6</span>
          </div>
          <div className="week-navigatin__day">
            <span className="week-navigatin__day-name">SAT</span>
            <span className="week-navigatin__day-date">7</span>
          </div>
        </nav>
      </header>
      <div className="main">
        <aside className="sidebar">
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">00:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">01:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">02:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">03:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">04:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">05:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">06:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">07:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">08:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">09:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">10:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">11:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">12:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">13:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">14:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">15:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">16:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">17:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">18:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">19:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">20:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">21:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">22:00</span>
          </div>
          <div className="sidebar__hour">
            <span className="sidebar__hour-text">23:00</span>
          </div>
        </aside>
        <div className="table">
          <div className="table__week">
            <div className="table__day">
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
            </div>
            <div className="table__day">
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
            </div>
            <div className="table__day">
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
            </div>
            <div className="table__day">
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
            </div>
            <div className="table__day">
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
            </div>
            <div className="table__day">
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
            </div>
            <div className="table__day">
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
              <div className="table__hour"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pop-up"></div>
    </div>
  );
};

export default App;

import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="calendar">
        <header className="header">
          <nav className="header-navigatin">
            <div className="header-navigatin__wr">
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
          </nav>

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




        </header>
        <div className="main">
          <aside className="sidebar">
            <div className="sidebar__hour first">
              <span className="sidebar__hour-text first__hour">00:00</span>
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
    )
  }
}

export default Calendar;
import React from 'react';

class Header extends React.Component {

    render() {
        return (
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
        )
    }
}

export default Header;
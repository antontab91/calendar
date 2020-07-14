import React from 'react';
import rangeGenerator from '../utilites'
import Day from './Day/Day.jsx'

class Main extends React.Component {

    render() {

        return (
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
                        {
                            rangeGenerator(0, 6).map((day) => {
                                return (
                                    <Day key={Math.random()} />                                   // потом заменить ключи не забыть 
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
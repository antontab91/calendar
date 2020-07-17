import React from 'react';
import moment from 'moment';
import { getRangeOfDaysByDate } from '../utilites';
import Day from './Day/Day.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import './main.scss';

const Main = ({ currDate, viewedDate, events, handleDeleteEvent }) => {

    const days = getRangeOfDaysByDate(viewedDate);  // массив дней

    return (
        <div className="main">
            <Sidebar />
            <div className="table">
                <div className="table__week">
                    {
                        days.map((day) => {

                            const filteredEvents = events.filter((event) => {
                                return moment(new Date(`${event.date} ${event.startTime}`)).isSame(day, 'day')
                            })

                            return (
                                <Day key={day} day={day} currDate={currDate} events={filteredEvents} handleDeleteEvent={handleDeleteEvent} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Main;
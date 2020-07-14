import React from 'react';
import moment from 'moment';
import { getRangeOfDaysByDate } from '../utilites';
import Day from './Day/Day.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import './main.scss';



class Main extends React.Component {

    render() {
        const { currDate, viewedDate, events } = this.props;

        const days = getRangeOfDaysByDate(viewedDate);  // массив дней
        console.log(events);


        return (
            <div className="main">
                <Sidebar />
                <div className="table">
                    <div className="table__week">
                        {
                            days.map((day) => {
                                const filteredEvents = events.filter(event => moment(event.date).isSame(day, 'day'))

                                return (
                                    <Day key={day} day={day} currDate={currDate} events={filteredEvents} />
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
import React from 'react';
import AddButton from './AddBtn/AddBtn.jsx';
import CurrentDate from './CurrentDate/CurrentDate.jsx';
import MonthNavigation from './MonthNavigation/MonthNavigation.jsx';
import TableTitle from './TableTitle/TableTitle.jsx';
import './header.scss';


class Header extends React.Component {
    render() {
        const {
            currDate,
            viewedDate,
            goToNextWeek,
            goToPrevWeek,
            goToCurrent
        } = this.props;

        return (
            <header className="header">
                <nav className="header-navigatin">
                    <div className="header-navigatin__wr">
                        <AddButton />
                        <CurrentDate goToCurrent={goToCurrent} viewedDate={viewedDate} />
                        <MonthNavigation
                            viewedDate={viewedDate}
                            goToNextWeek={goToNextWeek}
                            goToPrevWeek={goToPrevWeek}
                        />
                    </div>
                </nav>

                <TableTitle
                    currDate={currDate}
                    viewedDate={viewedDate}
                />
            </header>
        )
    }
}

export default Header;
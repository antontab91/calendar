import React from 'react';
import AddButton from './AddBtn/AddBtn.jsx';
import CurrentDate from './CurrentDate/CurrentDate.jsx';
import MonthNavigation from './MonthNavigation/MonthNavigation.jsx';
import TableNavigatain from './TableNavigatain/TableNavigatain.jsx';
import './header.scss';


class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <nav className="header-navigatin">
                    <div className="header-navigatin__wr">
                        <AddButton />
                        <CurrentDate />
                        <MonthNavigation />
                    </div>
                </nav>

                <TableNavigatain />
            </header>
        )
    }
}

export default Header;
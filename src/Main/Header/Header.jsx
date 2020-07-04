import React from 'react';

import Day from './Day';


const Header = () => {
    return (
        <div className="header">
            {[1, 2, 3, 4, 5, 6, 7].map(day => {
                return <Day day={day}/>
            }) }
        </div>
    )
}
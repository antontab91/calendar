import React from 'react';

import Cell from './Cell';


const Table = () => {
    return (
        <div className="Row">
            {days.map(day => {
                return <Cell day={day} />
            })}
        </div>
    )
}

export default Table;
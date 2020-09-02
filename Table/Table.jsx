import React from 'react';

import Header from './Header';
import Row from './Row';


const Table = () => {
    return (
        <div className="table">
            <Header prop1={} prop2={} />
            {timePeriods.map(timePeriod => {
                return <Row />
            })}
        </div>
    )
}

export default Table;
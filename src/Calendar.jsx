import React from 'react';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Popup from './Poppup/Poppup.jsx';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      today: new Date(),
      shownPopup: false,
      zerroDay: 0,
    }
  }

  // getMonday = () => {

  // }


  render() {
    return (
      <div className="calendar">
        <Header />
        <Main />
        <Popup />
      </div>
    )
  }
}

export default Calendar;
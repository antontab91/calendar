import React from 'react';
import moment from 'moment';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Popup from './Poppup/Poppup.jsx';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    // const today = moment().startOf('day').format(); // текущая дата с нулевым временем
    const today = moment().format(); // текущая дата  

    this.state = {
      currDate: today,
      viewedDate: today,
      // viewedDate: today.startOf('isoWeek').format() // начало недели 
    }
  }

  goToNextWeek = () => {
    const { viewedDate } = this.state;

    this.setState({
      viewedDate: moment(viewedDate).add(7, 'days').format()
    })
  }

  goToPrevWeek = () => {
    const { viewedDate } = this.state;

    this.setState({
      viewedDate: moment(viewedDate).add(-7, 'days').format(),
    })
  };

  goToCurrent = () => {
    const { currDate } = this.state;

    this.setState({
      viewedDate: currDate
    });
  };

  render() {
    const { currDate, viewedDate } = this.state;

    return (
      <div className="calendar">
        <Header
          currDate={currDate}
          viewedDate={viewedDate}
          goToNextWeek={this.goToNextWeek}
          goToPrevWeek={this.goToPrevWeek}
          goToCurrent={this.goToCurrent}
        />
        <Main />
        <Popup />
      </div>
    )
  }
}

export default Calendar;
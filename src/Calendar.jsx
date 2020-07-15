import React from 'react';
import moment from 'moment';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Popup from './Poppup/Poppup.jsx';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    // const today = moment().startOf('day').format(); // текущая дата с нулевым временем такой формат 2020-07-14T15:51:55+03:00
    const today = moment().format(); // текущая дата  
    console.log(`today: ${today}`)

    this.state = {
      // currDate: '2020-07-14T15:51:55+03:00',
      // currDate: '2020-07-14T15:30:00+03:00',
      currDate: today,
      viewedDate: today,                                    // просматриваемая неделя , по дефолту от текущей даты 
      // viewedDate: today.startOf('isoWeek').format() // начало недели 

      popupIsShow: false,

      events: [{
        id: '2020-07-14T15:30:00+03:00',
        date: '2020-07-14T15:30:00+03:00',
        title: 'ДР Андрея',
        description: 'нужно поздравить'
      },
      {
        id: '2020-07-14T16:30:00+03:00',
        date: '2020-07-14T16:30:00+03:00',
        title: 'ДР Андрея2',
        description: 'нужно поздравить2'
      },
      {
        id: '2020-07-21T15:51:55+03:00',
        date: '2020-07-21T15:51:55+03:00',
        title: 'ДР Пети',
        description: 'нужно поздравить родителей Пети'
      }
      ]
    }
  }

  // componentDidMount() {
  // const events = getEvents().resolve((data) => data.json()).resolve(date => {
  //   this.setState({ events })
  // });

  // {
  //   id: '2020-07-14T15:51:55+03:00',
  //     title: 'ДР Андрея',
  //       description: 'нужно поздравить'
  // }

  // }

  // componentDidMount() {
  //   const { events } = this.state;

  //   setTimeout(() => {
  //     this.setState({
  //       events: [...events, {
  //         id: '2020-07-14T19:30:00+03:00',
  //         date: '2020-07-14T19:30:00+03:00',
  //         title: 'сходить в магазин',
  //         description: 'снять капусту, сходить в сильпо'
  //       }]
  //     });

  //   }, 5000);
  // }

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
    const { currDate, viewedDate, events, popupIsShow } = this.state;

    const filterEvents = events.filter((event) => moment(event.date).isSame(viewedDate, 'isoWeek'));  // тут отфильтровал СОБЫТИЯ по текущей неделе , для того чтобы показывало ивенты только текущей недели 

    console.log('filterEvents', filterEvents)


    return (
      <div className={`calendar ${this.props.popupIsShow ? 'show' : 'hide'}`}>
        <Header
          currDate={currDate}                      // текущая дата в формате 2020-07-14T15:51:55+03:00
          viewedDate={viewedDate}                   // показываемая дата в том же формате 
          goToNextWeek={this.goToNextWeek}          // + неделя
          goToPrevWeek={this.goToPrevWeek}          // - неделя
          goToCurrent={this.goToCurrent}            // текущая   
        />
        <Main
          currDate={currDate}
          viewedDate={viewedDate}
          events={filterEvents}
        />
        <Popup
          popupIsShow={popupIsShow}
        />
      </div >
    )
  }
}

export default Calendar;

import React from 'react';
import moment from 'moment';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Popup from './Poppup/Poppup.jsx';
import { getEventsList, deleteEvent, createEvent } from "./eventsGateWays.js";

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    // const today = moment().startOf('day').format(); // текущая дата с нулевым временем такой формат 2020-07-14T15:51:55+03:00
    const today = moment().format(); // текущая дата  
    this.state = {
      currDate: today,
      viewedDate: today,                                    // просматриваемая неделя , по дефолту от текущей даты 
      // viewedDate: today.startOf('isoWeek').format()      // начало недели 
      popupIsShow: false,

      timeFormData: {
        id: Date.now(),
        date: '',
        title: '',
        description: '',
        startTime: '',
        endTime: '',
      },

      events: [
      ],
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

  componentDidMount() {
    this.fetchEvents();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.events === this.state.events) this.fetchEvents();
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

  showPopUp = () => {
    this.setState({
      popupIsShow: true,
    })
  }

  hidePopUp = () => {
    this.setState({
      popupIsShow: false,
    })
  }

  handleFillForm = (event) => {
    let { name, value } = event.target;
    this.setState({
      timeFormData: {
        ...this.state.timeFormData,
        [name]: value
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // this.state.events.push(this.state.timeFormData)
    createEvent(this.state.timeFormData).then(getEventsList())
    console.log(this.state.events)
  }

  fetchEvents = () =>
    getEventsList().then((events) =>
      this.setState({
        events,
      })
    );

  render() {
    const { currDate, viewedDate, events, popupIsShow, timeFormData } = this.state;

    const filterEvents = events.filter((event) => moment(new Date(`${event.date} ${event.startTime}`)).isSame(viewedDate, 'isoWeek'));  // тут отфильтровал СОБЫТИЯ по текущей неделе , для того чтобы показывало ивенты только текущей недели 
    // '2020-07-21T15:51:55+03:00',
    // `2020-07-14T15:30`
    console.log(moment(`2020-07-14 15:30`).format())
    // console.log(moment(`2020-07-14T15:30:00+03:00`))
    // console.log('filterEvents', filterEvents)

    return (
      <div className={`calendar ${this.state.popupIsShow ? 'show' : 'hide'}`}>
        <Header
          popupIsShow={popupIsShow}
          showPopUp={this.showPopUp}
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
          hidePopUp={this.hidePopUp}
          timeFormData={timeFormData}
          handleFillForm={this.handleFillForm}
          handleSubmit={this.handleSubmit}
        />
      </div >
    )
  }
}

export default Calendar;

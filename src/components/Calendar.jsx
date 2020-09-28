import React from 'react';
import moment from 'moment';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Popup from './Poppup/Poppup.jsx';
import { getEventsList, deleteEvent, createEvent } from "../common/eventsGateWays.js";

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    // const today = moment().startOf('day').format(); // текущая дата с нулевым временем такой формат 2020-07-14T15:51:55+03:00
    const today = moment().format(); // текущая дата  
    this.state = {
      currDate: today,
      viewedDate: today,                                    // просматриваемая неделя , по дефолту от текущей даты 
      popupIsShow: false,
      timeFormData: {
        id: Date.now(),
        date: '',
        title: '',
        description: '',
        startTime: '',
        endTime: '',
      },

      events: [],
    }
  }

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
    createEvent(this.state.timeFormData).then(getEventsList())
  }

  fetchEvents = () =>
    getEventsList().then((events) =>
      this.setState({
        events,
      })
    );

  handleDeleteEvent = (id) => {
    deleteEvent(id).then((responce) => {
      console.log(responce)
      return this.fetchEvents()
    });
  };

  render() {
    const { currDate, viewedDate, events, popupIsShow, timeFormData } = this.state;

    const filterEvents = events.filter((event) => moment(new Date(`${event.date} ${event.startTime}`)).isSame(viewedDate, 'isoWeek'));  // тут отфильтровал СОБЫТИЯ по текущей неделе , для того чтобы показывало ивенты только текущей недели 

    return (
      <div className={`calendar ${this.state.popupIsShow ? 'show' : 'hide'}`}>
        <Header
          popupIsShow={popupIsShow}
          currDate={currDate}                      // текущая дата в формате 2020-07-14T15:51:55+03:00
          viewedDate={viewedDate}                   // показываемая дата в том же формате 
          showPopUp={this.showPopUp}
          goToNextWeek={this.goToNextWeek}
          goToPrevWeek={this.goToPrevWeek}
          goToCurrent={this.goToCurrent}
        />
        <Main
          currDate={currDate}
          viewedDate={viewedDate}
          events={filterEvents}
          handleDeleteEvent={this.handleDeleteEvent}
        />
        <Popup
          popupIsShow={popupIsShow}
          timeFormData={timeFormData}
          hidePopUp={this.hidePopUp}
          handleFillForm={this.handleFillForm}
          handleSubmit={this.handleSubmit}
        />
      </div >
    )
  }
}

export default Calendar;

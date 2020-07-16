import React from 'react';
import './poppup.scss';
import { faTimes, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class Popup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: Date.now(),
      date: '',
      title: '',
      description: '',
      startTime: '',
      endTime: '',
    }
  }


  handleFillForm = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });

  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.events.push(this.state)
    console.log(this.props.events)
  }


  render() {
    return (
      <div className={`pop-up ${this.props.popupIsShow ? 'show' : 'hide'}`}>
        <div className="pop-up__close">
          <FontAwesomeIcon icon={faTimes} onClick={this.props.hidePopUp} />
        </div>
        <form
          onSubmit={this.handleSubmit}
          className='pop-up__form' action="">
          <input
            autoComplete="off"
            className="pop-up__title"
            type="text"
            name="title"
            placeholder="Add Title"
            onChange={this.handleFillForm}
            value={this.state.title}
          />
          <div className="pop-up__form-wr">
            <div className="form-control">
              <input
                className="pop-up__time-set pop-up__date"
                type="date"
                name="date"
                onChange={this.handleFillForm}
                value={this.state.date}
              />
            </div>
            <div className="form-control">
              <input
                className="pop-up__time-set pop-up__startTime"
                type="time"
                name="startTime"
                onChange={this.handleFillForm}
                value={this.state.startTime}
              />
            </div>
            <div className="form-control">
              <input
                className="pop-up__time-set pop-up__endTime"
                type="time"
                name="endTime"
                onChange={this.handleFillForm}
                value={this.state.endTime}
              />
            </div>
          </div>
          <div className="form-control">
            <textarea
              className='pop-up__description'
              type="description"
              name="description"
              placeholder="Please add description"
              onChange={this.handleFillForm}
              value={this.state.description}
            />
          </div>
          <div className="form-control btn-control">
            <button className="pop-up__submit-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Popup;
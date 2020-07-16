import React from 'react';
import './poppup.scss';
import { faTimes, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Popup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: new Date(),
      date: '',
      title: '',
      description: '',
    }
  }


  handleFillForm = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });

  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.events.push(this.state)
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

          />
          <div className="pop-up__form-wr">

            <div className="form-control">
              <input
                className="pop-up__time-set pop-up__date"
                type="date"
                name="date"
                onChange={this.handleFillForm}
              />
            </div>

            <div className="form-control">
              <input
                className="pop-up__time-set pop-up__startTime"
                type="time"
                name="startTime"
                onChange={this.handleFillForm}
              />
            </div>

            <div className="form-control">
              <input
                className="pop-up__time-set pop-up__endTime"
                type="time"
                name="endTime"
                onChange={this.handleFillForm}
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
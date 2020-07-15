import React from 'react';
import './poppup.scss';
import { faTimes, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




class Popup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      date: '',
      title: '',
      description: '',
    }
  }

  render() {
    return (
      <div className={`pop-up ${this.props.popupIsShow ? 'show' : 'hide'}`}>
        <div className="pop-up__close">
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <form className='pop-up__form' action="">
          <input
            className="pop-up__title"
            type="text"
            name="title"
            placeholder="Add Title"
          />
          <div className="pop-up__form-wr">

            <div className="form-control">
              <input
                className="pop-up__time-set pop-up__date"
                type="date"
                name="date"
              />
            </div>

            <div className="form-control">
              <input
                className="pop-up__time-set pop-up__startTime"
                type="time"
                name="startTime"
              />
            </div>

            <div className="form-control">
              <input
                className="pop-up__time-set pop-up__endTime"
                type="time"
                name="endTime"
              />
            </div>

          </div>

          <div className="form-control">
            <textarea
              className='pop-up__description'
              type="description"
              name="description"
              placeholder="Please add description"
            />
          </div>

          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Popup;
import React from 'react';
import './poppup.scss';
import { faTimes, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Popup = ({ popupIsShow, hidePopUp, handleSubmit, handleFillForm, timeFormData }) => {

  return (
    <div className={`pop-up ${popupIsShow ? 'show' : 'hide'}`}>
      <div className="pop-up__close">
        <FontAwesomeIcon icon={faTimes} onClick={hidePopUp} />
      </div>
      <form
        onSubmit={() => {
          handleSubmit();
          hidePopUp();
        }}
        className='pop-up__form' action="">
        <input
          autoComplete="off"
          className="pop-up__title"
          type="text"
          name="title"
          placeholder="Add Title"
          onChange={handleFillForm}
          value={timeFormData.title}
        />
        <div className="pop-up__form-wr">
          <div className="form-control">
            <input
              className="pop-up__time-set pop-up__date"
              type="date"
              name="date"
              onChange={handleFillForm}
              value={timeFormData.date}
            />
          </div>
          <div className="form-control">
            <input
              className="pop-up__time-set pop-up__startTime"
              type="time"
              name="startTime"
              onChange={handleFillForm}
              value={timeFormData.startTime}
            />
          </div>
          <div className="form-control">
            <input
              className="pop-up__time-set pop-up__endTime"
              type="time"
              name="endTime"
              onChange={handleFillForm}
              value={timeFormData.endTime}
            />
          </div>
        </div>
        <div className="form-control">
          <textarea
            className='pop-up__description'
            type="description"
            name="description"
            placeholder="Please add description"
            onChange={handleFillForm}
            value={timeFormData.description}
          />
        </div>
        <div className="form-control btn-control">
          <button className="pop-up__submit-button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Popup;
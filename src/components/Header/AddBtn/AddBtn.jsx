import React from 'react';
import './addBtn.scss';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddButton = ({ showPopUp }) => {

  return (
    <button onClick={showPopUp} className="add-btn">
      <div className="add-btn__wr">
        <span className="add-btn__icon">
          <FontAwesomeIcon icon={faPlus} />
        </span>
        <span className="add-btn__text ">
          Create
        </span>
      </div>
    </button>
  )
}

export default AddButton;
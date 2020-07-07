import React from 'react';

const AddButton = () => {
  return (
    <button className="add-btn">
      <div className="add-btn__wr">
        <span className="add-btn__icon">
          {"+"}
        </span>
        <span className="add-btn__text">
          Create
        </span>
      </div>
    </button>
  )
}

export default AddButton;
import React from 'react';
import './poppup.scss'

class Popup extends React.Component {

  render() {
    return (
      <div className="pop-up">
        <div className="pop-up__close"></div>
        <form action="">
          <div className="form-control">
            1
          </div>
          <div className="form-control">
            2
          </div>
          <div className="form-control">
            3
          </div>
        </form>
      </div>
    )
  }
}

export default Popup;
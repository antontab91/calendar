import React from 'react';

const MounthNavigation = () => {
  return (
    <div className="mounth-navigation">
      <div className="mounth-navigation__btns-wr">
        <button className="mounth-navigation__btn-left mounth-navigation__btn">
          {"<"}
        </button>
        <button className="mounth-navigation__btn-right mounth-navigation__btn">
          {">"}
        </button>
      </div>
      <div className="mounth-navigation__current-mounth">
        JUN2020
      </div>
    </div>
  );
}

export default MounthNavigation;
import React from 'react';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Popup from './Poppup/Poppup.jsx';


// Algo getMonday
// 1 отталкиваемся от теущей даты - записываем ее в переменную тудей , обьявляем переменну мандей , куда будем записывать дату понедельника 
// 2 перебераем неделю по индексам (начинается с 0 (неделя по американски начинается с вс))
// 3 если индекс дня не равен 1 (понедельнику ) , записываем тудей новую дату на день меньше , пока не дойдем до нужного индекса 
// 4 если индекс равен 1 - это понедельник ,то что нужно 


export const getMonday = () => {
  const today = new Date();
  let monday = null;
  for (let i = 0; i < 7; i++) {
    if (today.getDay() !== 1) {
      today.setDate(today.getDate() - 1);
    } else {
      monday = today;
    }
  }
  return monday;
};


class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      today: new Date(),
      monday: getMonday(),
    }
  }

  render() {
    return (
      <div className="calendar">
        <Header />
        <Main />
        <Popup />
      </div>
    )
  }
}

export default Calendar;
// Алгоритм
// Используя метод getDay объектов Date, узнаем номер дня недели(0 = воскресенье, 1 = Понедельник и т.д.).
// Затем  вычетаем  это количество дней плюс один, например:
// 10.07.2020 - 3 + 1 - это пример работы чтобы не вылетело из головы
// 12.07.2020 - 0 + (-6)



export const getMonday = () => {
  let d = new Date();
  let day = d.getDay();
  let diff = d.getDate() - day + (day == 0 ? -6 : 1);
  return new Date(d.setDate(diff));
}

// export default getMonday;




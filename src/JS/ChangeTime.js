import refs from '../index';

export default class ChangeTime {
  constructor(arrDay, arrMounth, arrYears, date) {
    this.arrDay = arrDay;
    this.arrMounth = arrMounth;
    this.arrYears = arrYears;
    this.date = date;
  }

  changeDay() {
    refs.sign.innerHTML = '';
    refs.lisetDay.classList.remove('hide');
    refs.lisetDay.innerHTML = '';
    this.arrDays = [];
    for (let i = 1; i < 32; i += 1) {
      this.arrDays.push(i);
    }
    const itemDayList = this.arrDays.map(day => {
      return `<li class="list_item">
      ${day}</li>`;
    });
    refs.lisetDay.insertAdjacentHTML('beforeend', itemDayList.join(''));
    return;
  }

  changeMounth() {
    refs.listMounth.classList.remove('hide');
    refs.listMounth.innerHTML = '';
    this.arrMounth = [];
    for (let i = 1; i < 13; i += 1) {
      this.arrMounth.push(i);
    }
    const itemMounthList = this.arrMounth.map(mounth => {
      return `<li class="list_item">
      ${mounth}</li>`;
    });
    refs.listMounth.insertAdjacentHTML('beforeend', itemMounthList.join(''));
    return;
  }

  changeYears() {
    refs.listYears.classList.remove('hide');
    refs.listYears.innerHTML = '';
    this.arrYears = [];
    for (let i = 1945; i < this.date.getFullYear() + 1; i += 1) {
      this.arrYears.push(i);
    }
    const itemYearsList = this.arrYears.map(mounth => {
      return `<li class="list_item">
    ${mounth}</li>`;
    });
    refs.listYears.insertAdjacentHTML('beforeend', itemYearsList.join(''));
    return;
  }
}

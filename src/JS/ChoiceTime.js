import refs from '../index';
import { zodiac } from './Zodiac';

export default class ChoiceTime {
  constructor(event, arrDays, arrMounth, arrYears) {
    this.e = event;
    this.arrDays = arrDays;
    this.arrMounth = arrMounth;
    this.arrYears = arrYears;
  }

  choiceDay() {
    const { textContent } = this.e.target;
    refs.textDay.textContent = textContent;
    refs.textDay.style.color = '#315dfa';
    refs.lisetDay.innerHTML = '';
    this.arrDays = [];
    refs.lisetDay.classList.add('hide');
    if (
      Number(refs.textDay.textContent) &&
      Number(refs.textMounth.textContent) &&
      Number(refs.textYears.textContent) > 1
    ) {
      zodiac();
    }

    return;
  }

  choiceMounth() {
    const { textContent } = this.e.target;
    refs.textMounth.textContent = textContent;
    refs.textMounth.style.color = '#315dfa';
    refs.listMounth.innerHTML = '';
    this.arrMounth = [];
    refs.listMounth.classList.add('hide');
    return;
  }

  choiceYear() {
    const { textContent } = this.e.target;
    refs.textYears.textContent = textContent;
    refs.textYears.style.color = '#315dfa';
    refs.listYears.innerHTML = '';
    this.arrYears = [];
    refs.listYears.classList.add('hide');
    refs.birthdayError.classList.add('hide');
    refs.buttonNextSign.classList.remove('hide');
    if (
      Number(refs.textDay.textContent) &&
      Number(refs.textMounth.textContent) &&
      Number(refs.textYears.textContent) > 1
    ) {
      zodiac();
    }
    return;
  }
}

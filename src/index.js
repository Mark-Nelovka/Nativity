import './sass/main.scss';
import Questions from './JS/Questions';
import OpenQuestion from './JS/openQuestion';
import ChangeTime from './JS/ChangeTime';
import ChoiceTime from './JS/ChoiceTime';
import { infoCall } from './JS/apiService';

const refs = {
  genderForm: document.querySelector('.gender_change'),
  formDay: document.querySelector('.form-day'),
  formSlip: document.querySelector('.form-slip'),
  formPlans: document.querySelector('.form-plans'),
  formLife: document.querySelector('.form-life'),
  formBirthday: document.querySelector('.form-birthday'),
  buttonNext: document.querySelector('.button-next'),
  infoSec: document.querySelector('.section-info'),
  genderSec: document.querySelector('.section-gender'),
  heroSec: document.querySelector('.hero'),
  questionOne: document.querySelector('.question-one'),
  slipSec: document.querySelector('.question-slip'),
  plansSec: document.querySelector('.question-plans'),
  lifeSec: document.querySelector('.question-life'),
  birthdaySec: document.querySelector('.question-birthday'),
  buttonChangeDay: document.querySelector('.button_birthday_day'),
  lisetDay: document.querySelector('.list_day'),
  textDay: document.querySelector('.text_birthday_day'),
  listMounth: document.querySelector('.list_mounth'),
  textMounth: document.querySelector('.text_birthday_mounth'),
  buttonChangeMounth: document.querySelector('.button_birthday_mounth'),
  listYears: document.querySelector('.list_years'),
  textYears: document.querySelector('.text_birthday_years'),
  buttonChangeYears: document.querySelector('.button_birthday_years'),
  birthdayError: document.querySelector('.birthday-error'),
  sign: document.querySelector('.container_sign'),
  buttonSign: document.querySelector('.container_button_sign'),
  containerSign: document.querySelector('.container_birthday_day'),
  analyzeSec: document.querySelector('.section_analyze'),
  percent: document.querySelector('.percentage'),
  analyze: document.querySelector('.analyze'),
  correction: document.querySelector('.correction'),
  calculation: document.querySelector('.calculation'),
  generation: document.querySelector('.generation'),
  save: document.querySelector('.save'),
  search: document.querySelector('.search'),
  write: document.querySelector('.write'),
  loadDone: document.querySelector('.load_done'),
  footer: document.querySelector('.footer-text'),
  resultSec: document.querySelector('.section_result'),
  footerResult: document.querySelector('.footer_result'),
  buttonCall: document.querySelector('.button_call'),
  tableResult: document.querySelector('.table'),
  buttonNextSign: document.querySelector('.button-next_sign'),
  female: document.querySelector('.female'),
  male: document.querySelector('.male'),
  morning: document.querySelector('.morning'),
  night: document.querySelector('.night'),
  evening: document.querySelector('.evening'),
  day: document.querySelector('.day'),
  slipYes: document.querySelector('.slip-yes'),
  slipNo: document.querySelector('.slip-no'),
  slipMaybe: document.querySelector('.slip-maybe'),
  plansYes: document.querySelector('.plans-yes'),
  plansNo: document.querySelector('.plans-no'),
  plansMaybe: document.querySelector('.plans-maybe'),
  lifeFamily: document.querySelector('.life-family'),
  lifeTravel: document.querySelector('.life-travel'),
  lifeCarier: document.querySelector('.life-cariers'),
  lifeAll: document.querySelector('.life-all'),
};

refs.genderForm.addEventListener('click', inputChange);
refs.formDay.addEventListener('click', inputChange);
refs.formSlip.addEventListener('click', inputChange);
refs.formPlans.addEventListener('click', inputChange);
refs.formLife.addEventListener('click', inputChange);
refs.buttonNext.addEventListener('click', openQuestions);
refs.buttonChangeDay.addEventListener('click', changeTime);
refs.buttonChangeMounth.addEventListener('click', changeTime);
refs.buttonChangeYears.addEventListener('click', changeTime);
refs.lisetDay.addEventListener('click', choiceTime);
refs.listMounth.addEventListener('click', choiceTime);
refs.listYears.addEventListener('click', choiceTime);
refs.buttonCall.addEventListener('click', infoCall);
refs.buttonNextSign.addEventListener('click', openQuestions);

function inputChange(e) {
  const question = new Questions(e);
  question.inputChange();
  return;
}

let counter = 0;

function openQuestions() {
  counter += 1;
  const open = new OpenQuestion(counter);
  open.openQuestions();
  return;
}

let arrDays = [];
let arrMounth = [];
let arrYears = [];
const date = new Date();

function changeTime(e) {
  const { time } = e.target.dataset;
  switch (time) {
    case 'day':
      const changeDay = new ChangeTime(arrDays, arrMounth, arrYears, date);
      changeDay.changeDay();
      break;
    case 'mounth':
      const changeMounth = new ChangeTime(arrDays, arrMounth, arrYears, date);
      changeMounth.changeMounth();
      break;
    case 'years':
      const changeYears = new ChangeTime(arrDays, arrMounth, arrYears, date);
      changeYears.changeYears();
      break;
  }
}

function choiceTime(e) {
  const { change } = e.currentTarget.dataset;
  switch (change) {
    case 'day':
      const choiceDay = new ChoiceTime(e, arrDays, arrMounth, arrYears);
      choiceDay.choiceDay();
      break;
    case 'mounth':
      const choiceMounth = new ChoiceTime(e, arrDays, arrMounth, arrYears);
      choiceMounth.choiceMounth();
      break;
    case 'year':
      const choiceYears = new ChoiceTime(e, arrDays, arrMounth, arrYears);
      choiceYears.choiceYear();
      break;
  }
}

export function percent() {
  let num = Number(refs.percent.textContent);
  let id = setInterval(() => {
    num += 1;
    refs.percent.textContent = num + '%';
    switch (num) {
      case 10:
        refs.analyze.style.color = 'green';
        break;
      case 20:
        refs.correction.style.color = 'green';
        break;
      case 30:
        refs.calculation.style.color = 'green';
        break;
      case 40:
        refs.generation.style.color = 'green';
        break;
      case 50:
        refs.save.style.color = 'green';
        break;
      case 60:
        refs.search.style.color = 'green';
        break;
      case 61:
        refs.write.style.color = 'red';
        break;
      case 100:
        clearInterval(id);
        refs.loadDone.textContent = 'Готово';
        setTimeout(() => {
          refs.analyzeSec.classList.add('hide');
          refs.resultSec.classList.remove('hide');
          refs.footerResult.classList.remove('hide');
        }, 1000);
        break;
    }
  }, 100);
}

export default refs;

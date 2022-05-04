import './sass/main.scss';
import aqua from './images/Signs/Aquarius-min.png';
import aries from './images/Signs/1_aries-min.png';
import taurus from './images/Signs/2_Taurus-min.png';
import gemini from './images/Signs/3_Gemini-min.png';
import leo from './images/Signs/5_Leo-min.png';
import virgo from './images/Signs/6_Virgo-min.png';
import libra from './images/Signs/7_Libra-min.png';
import scorpion from './images/Signs/8_Scorpio-min.png';
import sagittarius from './images/Signs/9_Sagittarius-min.png';
import capricorn from './images/Signs/10_Capricorn-min.png';
import pisces from './images/Signs/12_Pisces-min.png';
import cancer from './images/Signs/Cancer_Rak-min.png';
import { green } from 'colorette';
import axios from 'axios';

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
  buttonCall: document.querySelector('.button_call'),
};

refs.genderForm.addEventListener('click', inputChange);
refs.formDay.addEventListener('click', inputChange);
refs.formSlip.addEventListener('click', inputChange);
refs.formPlans.addEventListener('click', inputChange);
refs.formLife.addEventListener('click', inputChange);
refs.buttonNext.addEventListener('click', openQuestions);
refs.buttonChangeDay.addEventListener('click', changeDay);
refs.buttonChangeMounth.addEventListener('click', changeDay);
refs.buttonChangeYears.addEventListener('click', changeDay);
refs.lisetDay.addEventListener('click', choiceDay);
refs.listMounth.addEventListener('click', choiceDay);
refs.listYears.addEventListener('click', choiceDay);
refs.buttonCall.addEventListener('click', infoCall);

let counter = 0;

function inputChange(e) {
  const { checked } = e.target;
  if (checked) {
    refs.buttonNext.classList.remove('hide');
  }
}

function openQuestions() {
  counter += 1;
  console.log('object');
  if (counter === 1) {
    refs.heroSec.classList.add('hide');
    refs.infoSec.classList.add('hide');
    refs.genderSec.classList.add('hide');
    refs.questionOne.classList.remove('hide');
    refs.buttonNext.classList.add('hide');
  } else if (counter === 2) {
    refs.questionOne.classList.add('hide');
    refs.slipSec.classList.remove('hide');
    refs.buttonNext.classList.add('hide');
  } else if (counter === 3) {
    refs.slipSec.classList.add('hide');
    refs.plansSec.classList.remove('hide');
    refs.buttonNext.classList.add('hide');
  } else if (counter === 4) {
    refs.plansSec.classList.add('hide');
    refs.lifeSec.classList.remove('hide');
    refs.buttonNext.classList.add('hide');
  } else if (counter === 5) {
    refs.lifeSec.classList.add('hide');
    refs.birthdaySec.classList.remove('hide');
    refs.buttonNext.classList.add('hide');
    percent();
  } else if (counter === 6) {
    refs.birthdaySec.classList.add('hide');
    refs.analyzeSec.classList.remove('hide');
    refs.buttonNext.classList.add('hide');
    refs.footer.classList.add('hide');
  }
}

let arrDays = [];
let arrMounth = [];
let arrYears = [];
const date = new Date();

function changeDay(e) {
  const { time } = e.target.dataset;
  refs.sign.innerHTML = '';
  if (time === 'day') {
    refs.lisetDay.classList.remove('hide');
    refs.lisetDay.innerHTML = '';
    arrDays = [];
    for (let i = 0; i < 32; i += 1) {
      arrDays.push(i);
    }
    const itemDayList = arrDays.map(day => {
      return `<li class="list_item">
      ${day}</li>`;
    });
    refs.lisetDay.insertAdjacentHTML('beforeend', itemDayList.join(''));
    return;
  }

  if (time === 'mounth') {
    refs.listMounth.classList.remove('hide');
    refs.listMounth.innerHTML = '';
    arrMounth = [];
    for (let i = 1; i < 13; i += 1) {
      arrMounth.push(i);
    }
    const itemMounthList = arrMounth.map(mounth => {
      return `<li class="list_item">
      ${mounth}</li>`;
    });
    refs.listMounth.insertAdjacentHTML('beforeend', itemMounthList.join(''));
    return;
  }

  if (time === 'years') {
    refs.listYears.classList.remove('hide');
    refs.listYears.innerHTML = '';
    arrYears = [];
    for (let i = 1945; i < date.getFullYear() + 1; i += 1) {
      arrYears.push(i);
    }
    const itemYearsList = arrYears.map(mounth => {
      return `<li class="list_item">
      ${mounth}</li>`;
    });
    refs.listYears.insertAdjacentHTML('beforeend', itemYearsList.join(''));
    return;
  }
}

function choiceDay(e) {
  const { change } = e.currentTarget.dataset;
  if (change === 'day') {
    const { textContent } = e.target;
    refs.textDay.textContent = textContent;
    refs.lisetDay.innerHTML = '';
    arrDays = [];
    refs.lisetDay.classList.add('hide');
    zodiac();
    return;
  }

  if (change === 'mounth') {
    const { textContent } = e.target;
    refs.textMounth.textContent = textContent;
    refs.listMounth.innerHTML = '';
    arrMounth = [];
    refs.listMounth.classList.add('hide');
    return;
  }

  if (change === 'year') {
    const { textContent } = e.target;
    refs.textYears.textContent = textContent;
    refs.listYears.innerHTML = '';
    arrYears = [];
    refs.listYears.classList.add('hide');
    refs.birthdayError.classList.add('hide');
    refs.buttonNext.classList.remove('hide');
    zodiac();
    return;
  }
}

function zodiac() {
  const day = Number(refs.textDay.textContent);
  const mounth = Number(refs.textMounth.textContent);

  switch (mounth) {
    case 1:
      if (day <= 20) {
        const signAqua = `<img class="sign_mage" src='${capricorn}' alt="Aqua" />
            <p class="sign_text">Козерог</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      } else {
        const signAqua = `<img class="sign_mage" src='${aqua}' alt="Aqua" />
            <p class="sign_text">Водолей</p>`;

        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      }
      break;
    case 2:
      if (day <= 19) {
        const signAqua = `<img class="sign_mage" src='${aqua}' alt="Aqua" />
            <p class="sign_text">Водолей</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      } else {
        const signAqua = `<img class="sign_mage" src='${pisces}' alt="Aqua" />
            <p class="sign_text">Рыбы</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      }
      break;
    case 3:
      if (day <= 20) {
        const signAqua = `<img class="sign_mage" src='${pisces}' alt="Aqua" />
            <p class="sign_text">Рыбы</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      } else {
        const signAqua = `<img class="sign_mage" src='${aries}' alt="Aqua" />
            <p class="sign_text">Овен</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      }
      break;
    case 4:
      if (day <= 20) {
        const signAqua = `<img class="sign_mage" src='${aries}' alt="Aqua" />
            <p class="sign_text">Овен</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      } else {
        const signAqua = `<img class="sign_mage" src='${taurus}' alt="Aqua" />
            <p class="sign_text">Телец</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      }
      break;
    case 5:
      if (day <= 21) {
        const signAqua = `<img class="sign_mage" src='${taurus}' alt="Aqua" />
            <p class="sign_text">Телец</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      } else {
        const signAqua = `<img class="sign_mage" src='${gemini}' alt="Aqua" />
            <p class="sign_text">Близнецы</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      }
      break;
    case 6:
      if (day <= 21) {
        const signAqua = `<img class="sign_mage" src='${gemini}' alt="Aqua" />
            <p class="sign_text">Близнецы</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      } else {
        const signAqua = `<img class="sign_mage" src='${cancer}' alt="Aqua" />
            <p class="sign_text">Рак</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      }
      break;
    case 7:
      if (day <= 22) {
        const signAqua = `<img class="sign_mage" src='${cancer}' alt="Aqua" />
            <p class="sign_text">Рак</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      } else {
        const signAqua = `<img class="sign_mage" src='${leo}' alt="Aqua" />
            <p class="sign_text">Лев</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      }
      break;
    case 8:
      if (day <= 21) {
        const signAqua = `<img class="sign_mage" src='${leo}' alt="Aqua" />
            <p class="sign_text">Лев</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      } else {
        const signAqua = `<img class="sign_mage" src='${virgo}' alt="Aqua" />
            <p class="sign_text">Дева</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      }
      break;
    case 9:
      if (day <= 23) {
        const signAqua = `<img class="sign_mage" src='${virgo}' alt="Aqua" />
            <p class="sign_text">Дева</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      } else {
        const signAqua = `<img class="sign_mage" src='${libra}' alt="Aqua" />
            <p class="sign_text">Весы</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      }
      break;
    case 10:
      if (day <= 23) {
        const signAqua = `<img class="sign_mage" src='${libra}' alt="Aqua" />
            <p class="sign_text">Весы</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      } else {
        const signAqua = `<img class="sign_mage" src='${scorpion}' alt="Aqua" />
            <p class="sign_text">Скорпион</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      }
      break;
    case 11:
      if (day <= 22) {
        const signAqua = `<img class="sign_mage" src='${scorpion}' alt="Aqua" />
            <p class="sign_text">Скорпион</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      } else {
        const signAqua = `<img class="sign_mage" src='${sagittarius}' alt="Aqua" />
            <p class="sign_text">Стрелец</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      }
      break;
    case 12:
      if (day <= 22) {
        const signAqua = `<img class="sign_mage" src='${sagittarius}' alt="Aqua" />
            <p class="sign_text">Стрелец</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      } else {
        const signAqua = `<img class="sign_mage" src='${capricorn}' alt="Aqua" />
            <p class="sign_text">Козерог</p>`;
        refs.sign.insertAdjacentHTML('beforeend', signAqua);
        refs.containerSign.style.paddingBottom = 15 + 'px';
        refs.buttonSign.classList.remove('hide');
        refs.footer.classList.add('hide');
      }
      break;
  }
}

function percent() {
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
        }, 1000);
        break;
    }
  }, 100);
}

async function infoCall() {
  const { data } = await axios.get('https://swapi.dev/api/people/1/');
  console.log(data);
}

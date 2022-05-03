import './sass/main.scss';

const refs = {
  genderForm: document.querySelector('.gender_change'),
  formDay: document.querySelector('.form-day'),
  formSlip: document.querySelector('.form-slip'),
  formPlans: document.querySelector('.form-plans'),
  formLife: document.querySelector('.form-life'),
  buttonNext: document.querySelector('.button-next'),
  infoSec: document.querySelector('.section-info'),
  genderSec: document.querySelector('.section-gender'),
  heroSec: document.querySelector('.hero'),
  questionOne: document.querySelector('.question-one'),
  slipSec: document.querySelector('.question-slip'),
  plansSec: document.querySelector('.question-plans'),
  lifeSec: document.querySelector('.question-life'),
};

refs.genderForm.addEventListener('click', inputChange);
refs.formDay.addEventListener('click', inputChange);
refs.formSlip.addEventListener('click', inputChange);
refs.formPlans.addEventListener('click', inputChange);
refs.formLife.addEventListener('click', inputChange);
refs.buttonNext.addEventListener('click', openQuestions);

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
  }
}

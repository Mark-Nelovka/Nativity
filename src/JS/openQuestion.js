import refs, { percent } from '../index';

export default class OpenQuestion {
  constructor(counter) {
    this.count = counter;
  }

  openQuestions() {
    switch (this.count) {
      case 1:
        refs.heroSec.classList.add('hide');
        refs.infoSec.classList.add('hide');
        refs.genderSec.classList.add('hide');
        refs.questionOne.classList.remove('hide');
        refs.buttonNext.classList.add('hide');
        break;
      case 2:
        refs.questionOne.classList.add('hide');
        refs.slipSec.classList.remove('hide');
        refs.buttonNext.classList.add('hide');
        break;
      case 3:
        refs.slipSec.classList.add('hide');
        refs.plansSec.classList.remove('hide');
        refs.buttonNext.classList.add('hide');
        break;
      case 4:
        refs.plansSec.classList.add('hide');
        refs.lifeSec.classList.remove('hide');
        refs.buttonNext.classList.add('hide');
        break;
      case 5:
        refs.lifeSec.classList.add('hide');
        refs.birthdaySec.classList.remove('hide');
        refs.buttonNext.classList.add('hide');
        break;
      case 6:
        refs.birthdaySec.classList.add('hide');
        refs.analyzeSec.classList.remove('hide');
        refs.buttonNext.classList.add('hide');
        refs.footer.classList.add('hide');
        percent();
        break;
    }
  }
}

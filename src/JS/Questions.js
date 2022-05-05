import refs from '../index';

export default class Questions {
  constructor(event) {
    this.e = event;
  }
  inputChange() {
    const { checked, id } = this.e.target;
    switch (id) {
      case 'female':
        refs.female.style.color = '#315dfa';
        refs.male.style.color = '#000000';
        break;
      case 'male':
        refs.male.style.color = '#315dfa';
        refs.female.style.color = '#000000';
        break;
      case 'morning':
        refs.morning.style.color = '#315dfa';
        refs.night.style.color = '#000000';
        refs.evening.style.color = '#000000';
        refs.day.style.color = '#000000';
        break;
      case 'night':
        refs.night.style.color = '#315dfa';
        refs.morning.style.color = '#000000';
        refs.evening.style.color = '#000000';
        refs.day.style.color = '#000000';
        break;
      case 'evening':
        refs.evening.style.color = '#315dfa';
        refs.morning.style.color = '#000000';
        refs.day.style.color = '#000000';
        refs.night.style.color = '#000000';
        break;
      case 'day':
        refs.day.style.color = '#315dfa';
        refs.evening.style.color = '#000000';
        refs.night.style.color = '#000000';
        refs.morning.style.color = '#000000';
        break;
      case 'slip-yes':
        refs.slipYes.style.color = '#315dfa';
        refs.slipNo.style.color = '#000000';
        refs.slipMaybe.style.color = '#000000';
        break;
      case 'slip-no':
        refs.slipNo.style.color = '#315dfa';
        refs.slipMaybe.style.color = '#000000';
        refs.slipYes.style.color = '#000000';
        break;
      case 'slip-maybe':
        refs.slipMaybe.style.color = '#315dfa';
        refs.slipNo.style.color = '#000000';
        refs.slipYes.style.color = '#000000';
        break;
      case 'plans-yes':
        refs.plansYes.style.color = '#315dfa';
        refs.plansNo.style.color = '#000000';
        refs.plansMaybe.style.color = '#000000';
        break;
      case 'plans-no':
        refs.plansNo.style.color = '#315dfa';
        refs.plansYes.style.color = '#000000';
        refs.plansMaybe.style.color = '#000000';
        break;
      case 'plans-maybe':
        refs.plansMaybe.style.color = '#315dfa';
        refs.plansNo.style.color = '#000000';
        refs.plansYes.style.color = '#000000';
        break;
      case 'life-family':
        refs.lifeFamily.style.color = '#315dfa';
        refs.lifeCarier.style.color = '#000000';
        refs.lifeTravel.style.color = '#000000';
        refs.lifeAll.style.color = '#000000';
        break;
      case 'life-travel':
        refs.lifeTravel.style.color = '#315dfa';
        refs.lifeAll.style.color = '#000000';
        refs.lifeCarier.style.color = '#000000';
        refs.lifeFamily.style.color = '#000000';
        break;
      case 'life-cariers':
        refs.lifeCarier.style.color = '#315dfa';
        refs.lifeFamily.style.color = '#000000';
        refs.lifeTravel.style.color = '#000000';
        refs.lifeAll.style.color = '#000000';
        break;
      case 'life-all':
        refs.lifeAll.style.color = '#315dfa';
        refs.lifeCarier.style.color = '#000000';
        refs.lifeFamily.style.color = '#000000';
        refs.lifeTravel.style.color = '#000000';
        break;
    }
    if (checked) {
      refs.buttonNext.classList.remove('hide');
      return;
    }
  }
}

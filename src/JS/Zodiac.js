import refs from '../index';
import aqua from '../images/Signs/Aquarius-min.png';
import aries from '../images/Signs/1_aries-min.png';
import taurus from '../images/Signs/2_Taurus-min.png';
import gemini from '../images/Signs/3_Gemini-min.png';
import leo from '../images/Signs/5_Leo-min.png';
import virgo from '../images/Signs/6_Virgo-min.png';
import libra from '../images/Signs/7_Libra-min.png';
import scorpion from '../images/Signs/8_Scorpio-min.png';
import sagittarius from '../images/Signs/9_Sagittarius-min.png';
import capricorn from '../images/Signs/10_Capricorn-min.png';
import pisces from '../images/Signs/12_Pisces-min.png';
import cancer from '../images/Signs/Cancer_Rak-min.png';

export function zodiac() {
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

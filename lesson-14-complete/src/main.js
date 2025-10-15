import dayjs from 'dayjs';
import { animate } from 'animejs';
import { greetUser } from './utils.js';
import utils from './utils.js'; // can be any name you like

const user = prompt('Enter your name:');
const message = greetUser(user || utils.defaultName);
const currentDate = dayjs().format('dddd, MMMM D, YYYY');
document.querySelector('#greeting').textContent = message;
document.querySelector('#today').textContent = `Today is ${currentDate}`;

animate('#greeting', {
  translateY: [-20, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutQuad',
});

import Icon from './logo.jpg';
import insta from './instagram.png';
import twitter from './twitter.png';
import wsp from './whatsapp.png';
import tel from './phone.png';
import greeting from './scripts/greeting.js';
import menu from './scripts/menu.js';
import contact from './scripts/contact.js';
import Rabas from './rabas.jpeg';
import Lomo from './lomo.jpeg';
import Pie from './pie.jpeg';

const buttons = document.getElementsByTagName('button');
const content = document.getElementById('content');
greeting();

Array.prototype.forEach.call(buttons, (item) => {
    item.addEventListener('click',function(e) {
        e.target.style.backgroundColor = 'orangered';
        if (e.target.textContent == 'Menu') {
          buttons[0].style.backgroundColor = 'wheat';
          buttons[2].style.backgroundColor = 'wheat';
          content.textContent = '';
          menu();
        } else if (e.target.textContent == 'Home') {
          buttons[1].style.backgroundColor = 'wheat';
          buttons[2].style.backgroundColor = 'wheat';
          content.textContent = '';
          greeting();
        } else if (e.target.textContent == 'Contact') {
          buttons[0].style.backgroundColor = 'wheat';
          buttons[1].style.backgroundColor = 'wheat';
          content.textContent = '';
          contact();
        } 
      });
});


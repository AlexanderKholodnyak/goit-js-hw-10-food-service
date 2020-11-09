import menuItems from '../menu.json';
import itemsTemplate from '../templates/menu-items.hbs';

const elementMenu = document.querySelector('ul.js-menu');

const markup = itemsTemplate(menuItems);
elementMenu.insertAdjacentHTML('beforeend', markup);
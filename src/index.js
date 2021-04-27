import './styles.css';
import menu from './data/menu.json';
import createMenu from './templates/menuTemplate.hbs';

console.log(menu)

const refs = {
  menuList: document.querySelector('.js-menu'),
  body: document.body,
  input: document.querySelector('.theme-switch__toggle'),
}

refs.menuList.insertAdjacentHTML('beforeend', createMenu(menu));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.input.addEventListener('click', onChangeTheme);

refs.input.checked = localStorage.getItem('Theme') === Theme.DARK;
refs.body.classList.add(localStorage.getItem('Theme') === null ? Theme.LIGHT : localStorage.getItem('Theme'))

function toggleTheme(rem, add) {
  refs.body.classList.remove(rem)
  refs.body.classList.add(add)
  localStorage.setItem('Theme', add)
}

function onChangeTheme(e) {
  if (e.target.checked) {
  toggleTheme(Theme.LIGHT,Theme.DARK)
    return
  }
 toggleTheme(Theme.DARK, Theme.LIGHT)
}
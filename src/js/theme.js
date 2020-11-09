const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const refs = {
    bodyItem : document.querySelector('body'),
    checkElement : document.querySelector('#theme-switch-toggle'),
    colorOfTheme : localStorage.getItem(theme.LIGHT)
}

refs.bodyItem.classList.add(theme.LIGHT);
refs.checkElement.addEventListener('change', switchChange);

if (refs.colorOfTheme === '') {
  ref.bodyItem.classList.add(theme.LIGHT);
}

if (refs.colorOfTheme === 'false') {
  refs.bodyItem.classList.remove(theme.LIGHT);
  refs.bodyItem.classList.add(theme.DARK);
  refs.checkElement.checked = true;
}

function switchChange(evt) {
  refs.bodyItem.classList.toggle(theme.LIGHT);
  refs.bodyItem.classList.toggle(theme.DARK);

  const isLight = refs.bodyItem.classList.contains(theme.LIGHT);
  
    localStorage.setItem(theme.LIGHT, isLight);
}
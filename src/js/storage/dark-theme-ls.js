import { bodyRef, toggleRef, footerDarktheme } from '../dom/dark-theme';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
  
const savedTheme = localStorage.getItem('theme');

// Добавление слушателя события 
toggleRef.addEventListener('change', event => {
    localStorage.setItem('theme', bodyRef.classList);
});
  
updateDarkTheme();
checkboxChecked();
updateThemeFooter();

// Сохранение темы при перезагрузке страницы 
function updateDarkTheme() {
    if (savedTheme) {
      bodyRef.classList = savedTheme;
    }
}
  
function checkboxChecked() {
    if (savedTheme === 'dark-theme') {
      toggleRef.setAttribute('checked', true);
    }
}
  
function updateThemeFooter() {
    if (savedTheme === 'dark-theme') {
      footerDarktheme.classList.add('dark-theme');
    }
}
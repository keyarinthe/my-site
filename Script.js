// JavaScript source code
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  //ge.classList.toggle('dark-theme');
};
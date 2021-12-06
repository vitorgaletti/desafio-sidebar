const menu = document.querySelector('.menu');
const sideBarNav = document.querySelector('.sidebar-nav');
const sideBarTop = document.querySelector('.sidebar-top');
const logo = document.querySelector('.logo');
const sideBarMain = document.querySelector('.sidebar-main');
const input = document.querySelector('.input');
const search = document.querySelector('.search');
const sideBarBottom = document.querySelector('.sidebar-bottom');
const profile = document.querySelector('.profile');
const profileDetails = document.querySelector('.profile-details');
const main = document.querySelector('main');

const sidebar = {
  menuEvent() {
    menu.addEventListener('click', () => {
      sideBarNav.classList.toggle('close');
      sideBarTop.classList.toggle('close');
      sideBarMain.classList.toggle('close');
      sideBarBottom.classList.toggle('close');
      input.classList.toggle('close');
      search.classList.toggle('close');
      logo.classList.toggle('hidden');
      profile.classList.toggle('hidden');
      profileDetails.classList.toggle('hidden');
      main.classList.toggle('active');
    });
  }
};

sidebar.menuEvent();

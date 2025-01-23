//All variables (document.querySelector)
//****************************************
const loginUser = document.querySelector('.buttonLogin');
const logoutUser = document.querySelector('.buttonClose');
const transferUser = document.querySelector('.buttonTransfer');
const requestUser = document.querySelector('.buttonRequest');
const hiUser = document.querySelector('.loginLeft');
const userName = document.querySelector('.userName');
const userPassword = document.querySelector('.userPassword');
const userNameOut = document.querySelector('.userNameOut');
const userPasswordOut = document.querySelector('.userPasswordOut');
const body = document.querySelector('body');
const mainPage = document.querySelector('.container');
const logo = document.querySelector('.logo');
const mainBalance = document.querySelector('.mainBalance');
//=============================================================
//The Main Object
//*****************
const main = [
  {
    name: 'Ahmed',
    password: 1111,
    balance: 58000,
    action: [14000, -586, 145, 695, -4587, 6953, 542],
  },
  {
    name: 'Hanem',
    password: 2222,
    balance: 34000,
    action: [13500, 528, -416, -896, 4587, -6953, 568],
  },
  {
    name: 'Nour',
    password: 3333,
    balance: 18000,
    action: [125, 528, -41, -86, 487, -63, -847],
  },
];
//==============================================================
// All Event Method
//*******************
loginUser.addEventListener('click', (e) => {
  for (i = 0; i < main.length; i++) {
    if (
      userName.value == main[i].name &&
      userPassword.value == main[i].password
    ) {
      hiUser.textContent = `Good Morning ${userName.value} `;
      mainPage.hidden = false;
      body.classList.add('bodyUserPage');
      body.classList.remove('bodyIndex');
      logo.style.width = '80px';
      mainBalance.textContent = main[i].balance;
      userName.value = '';
      userPassword.value = '';
    }
  }
});

logoutUser.addEventListener('click', function () {
  for (i = 0; i < main.length; i++) {
    if (
      userNameOut.value == main[i].name &&
      userPasswordOut.value == main[i].password
    ) {
      hiUser.textContent = 'Log in to get started';
      mainPage.hidden = true;
      body.classList.remove('bodyUserPage');
      body.classList.add('bodyIndex');
      logo.style.width = '180px';
      userNameOut.value = '';
      userPasswordOut.value = '';
    }
  }
});

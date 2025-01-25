//All variables (document.querySelector)
//****************************************
const loginUser = document.querySelector('.buttonLogin');
const logoutUser = document.querySelector('.buttonClose');
const transferButton = document.querySelector('.buttonTransfer');
const transferTo = document.querySelector('.transferTo');
const transferAmount = document.querySelector('.transferAmount');
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
const balanceDate = document.querySelector('.balanceDate');
const name = document.querySelector('.name');
const inAmount = document.querySelector('.inAmount');
const outAmount = document.querySelector('.outAmount');
const interestAmount = document.querySelector('.interestAmount');
const depWithColor0 = document.querySelector('.depWithColor0');
const depWithColor1 = document.querySelector('.depWithColor1');
const depWithColor2 = document.querySelector('.depWithColor2');
const depWithColor3 = document.querySelector('.depWithColor3');
const depWithColor4 = document.querySelector('.depWithColor4');
const depWithColor5 = document.querySelector('.depWithColor5');
const depWithColor6 = document.querySelector('.depWithColor6');
const depositWithdrawAmount0 = document.querySelector(
  '.depositWithdrawAmount0'
);
const depositWithdrawAmount1 = document.querySelector(
  '.depositWithdrawAmount1'
);
const depositWithdrawAmount2 = document.querySelector(
  '.depositWithdrawAmount2'
);
const depositWithdrawAmount3 = document.querySelector(
  '.depositWithdrawAmount3'
);
const depositWithdrawAmount4 = document.querySelector(
  '.depositWithdrawAmount4'
);
const depositWithdrawAmount5 = document.querySelector(
  '.depositWithdrawAmount5'
);
const depositWithdrawAmount6 = document.querySelector(
  '.depositWithdrawAmount6'
);
//=============================================================
//The Main Object
//*****************
const main = [
  {
    name: 'Ahmed',
    password: 1111,
    balance: 58000,
    action: [14000, -586, 145, 695, -4587, 6953, 542],
    rate: 0.12,
  },
  {
    name: 'Hanem',
    password: 2222,
    balance: 34000,
    action: [13500, 528, -416, -896, 4587, -6953, 568],
    rate: 0.15,
  },
  {
    name: 'Nour',
    password: 3333,
    balance: 18000,
    action: [125, 528, -41, -86, 487, -63, -847],
    rate: 0.09,
  },
];
//==============================================================
// All Event Method
//*******************
loginUser.addEventListener('click', (e) => {
  const newArr = [
    depositWithdrawAmount0,
    depositWithdrawAmount1,
    depositWithdrawAmount2,
    depositWithdrawAmount3,
    depositWithdrawAmount4,
    depositWithdrawAmount5,
    depositWithdrawAmount6,
  ];
  const newArr2 = [
    depWithColor0,
    depWithColor1,
    depWithColor2,
    depWithColor3,
    depWithColor4,
    depWithColor5,
    depWithColor6,
  ];

  // ============User Page====================

  for (i = 0; i < main.length; i++) {
    if (
      userName.value == main[i].name &&
      userPassword.value == main[i].password
    ) {
      hiUser.textContent = `Good Morning ${userName.value} `;
      balanceDate.textContent = Date();
      mainPage.hidden = false;
      body.classList.add('bodyUserPage');
      body.classList.remove('bodyIndex');
      logo.style.width = '80px';
      name.style.width = '150px';
      userName.value = '';
      userPassword.value = '';

      // ========Deposit & Withdraw & Color Tab=========
      for (j = 0; j < main[i].action.length; j++) {
        const userAction = main[i].action;

        newArr[j].textContent = userAction[j];
      }
    }
  }

  for (z = 0; z < newArr.length; z++) {
    if (Number(newArr[z].textContent) >= 0) {
      newArr2[z].textContent = 'Deposit';
      newArr2[z].style.background = '#322f33';
    } else if (Number(newArr[z].textContent) < 0) {
      newArr2[z].textContent = 'Withdraw';
      newArr2[z].style.background = '#edb257';
    }
    // console.log(Number(newArr[z].textContent));
  }
  let actionSum = 0;
  let inSum = 0;
  let outSum = 0;

  //===========Total In & Out & Main Balance=======

  for (y = 0; y < newArr.length; y++) {
    actionSum += Number(newArr[y].textContent);
    if (Number(newArr[y].textContent) > 0) {
      inSum += Number(newArr[y].textContent);
    } else if (Number(newArr[y].textContent) < 0) {
      outSum += Number(newArr[y].textContent);
    }
  }
  mainBalance.textContent = actionSum;
  inAmount.textContent = inSum;
  outAmount.textContent = outSum;

  //================RATE==================
});
//==============Transfer==================
transferButton.addEventListener('click', function () {
  for (g = 0; g < main.length; g++) {
    if (transferTo.value == main[g].name) {
      main[g].action.unshift(Number(transferAmount.value));
      mainBalance.textContent -= Number(transferAmount.value);
    }
  }
  transferTo.value = '';
  transferAmount.value = '';
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
      name.style.width = '500px';
    }
  }
});

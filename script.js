//All variables (document.querySelector)
const loginUser = document.querySelector('.buttonLogin');
const hiUser = document.querySelector('.loginLeft');
// All Event Method
loginUser.addEventListener('click', (e) => {
  location.href = 'userPage.html';
  hiUser.textContent = 'Good Morning';
});

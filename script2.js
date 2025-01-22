//All variables (document.querySelector)
const logOutUser = document.querySelector('.buttonLogout');
const hiUser = document.querySelector('.loginLeftUserPage');
hiUser.textContent = 'Good Morning';
// All Event Method
logOutUser.addEventListener('click', (e) => {
  location.href = 'index.html';
});

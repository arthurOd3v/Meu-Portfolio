const habLi = document.querySelectorAll('.js-lista-hab li');
const habInfo = document.querySelectorAll('.js-info-hab section');

function activeTab(index) {
  habInfo.forEach((section) => {
    section.classList.remove('ativo');
  });
  habInfo[index].classList.add('ativo');
}

habLi.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  });
});

'use strict';

//Deklarasi Variabel
const btnsOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const blurryEffect = document.querySelector('.overlay');

//callback openModal
const openModal = function () {
  /*gunakan this untuk mengakses,memanipulasi element
      this = btnsOpenModal[i]
  */

  modal.classList.remove('hidden');
  blurryEffect.classList.remove('hidden');
};

//callback closeModal
const closeModal = function (e) {
  const editClassList = function () {
    modal.classList.add('hidden');
    blurryEffect.classList.add('hidden');
  };

  if (e.type === 'click') {
    editClassList();
  } else if (e.key === 'Escape') {
    editClassList();
  }
};

//Event Handler Open Modal
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//Event Handler Close Modal
btnCloseModal.addEventListener('click', closeModal);
blurryEffect.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal);

'use strict';

//Deklarasi Variabel
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const blurryEffect = document.querySelector('.overlay');

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

//Event Handler Close Modal
btnCloseModal.addEventListener('click', closeModal);
blurryEffect.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal);

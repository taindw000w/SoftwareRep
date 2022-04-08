const btn = document.querySelector('.modal__btn')
const wrap = document.querySelector('.modal__wrapper')
const exit = document.querySelector('.modal__close')

function bindModal(trigger, modal, close) {
  trigger = document.querySelector(trigger),
  modal = document.querySelector(modal),
  close = document.querySelector(close)
  
  trigger.addEventListener("click", e => {
    e.preventDefault();
    modal.style.display = "flex";
  });
  close.addEventListener('click', () => {
    modal.style.display = "none";
  });

}

bindModal('.modal__btn', '.modal__wrapper', '.modal__close');
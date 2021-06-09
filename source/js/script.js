// Файл скрипта
let menuButton = document.querySelector(".nav__button");
let mainMenu = document.querySelector(".main-menu");
let leftButton = document.querySelector(".buttons__button--left");
let rightButton = document.querySelector(".buttons__button--right");
let clientCards = Array.from(document.querySelectorAll(".client-card"));
let firstCase = document.querySelector(".card");
let modal = document.querySelector(".modal")
let i = 0;

console.log(clientCards);
menuButton.classList.remove("nav__button--open");
menuButton.classList.remove("nav__button--nojs");
mainMenu.classList.add("main-menu--closed");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainMenu.classList.toggle("main-menu--closed");
});

firstCase.addEventListener ("click", function(){
  modal.classList.toggle("modal--closed");
})



rightButton.addEventListener("click", function () {
  ++i;

  if (i >= clientCards.length) {
    clientCards[i - 1].classList.add("client-card--closed");
    i = 0;
    clientCards[i].classList.remove("client-card--closed");
  } else {
    clientCards[i - 1].classList.add("client-card--closed");
    clientCards[i].classList.remove("client-card--closed");
  }
});

leftButton.addEventListener("click", function () {
  --i;
  if (i >= clientCards.length) {
    clientCards[i + 1].classList.add("client-card--closed");
    clientCards[i].classList.remove("client-card--closed");
  } else {
    clientCards[i + 1].classList.add("client-card--closed");
    clientCards[i].classList.remove("client-card--closed");
  }
});

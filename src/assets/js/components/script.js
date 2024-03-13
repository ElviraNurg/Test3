const nav = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');
nav.classList.remove('navigation--nojs');

const toggleClass = () => {
  if (nav.classList.contains('navigation--closed')) {
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');
  } else {
    nav.classList.add('navigation--closed');
    nav.classList.remove('navigation--opened');
  }
};
navToggle.addEventListener('click', () => toggleClass());

//Для формы
const form = document.querySelector('.form');
const formButton = document.querySelector('.form__button');

const toggleFormClass = () => {
  if (form.classList.contains('form--closed')) {
    form.classList.remove('form--closed');
    form.classList.add('form--opened');
  } else {
    form.classList.add('form--closed');
    form.classList.remove('form--opened');
  }
};
formButton.addEventListener('click', () => toggleFormClass());

//Слайдер

const sliderImages = document.querySelectorAll('.cart__product-photo');
const sliderButtons = document.querySelectorAll('.cart__control');
const toggleSliderClass = (index) => {
  for (let i = 0; i < sliderImages.length; i++) {
    if (sliderImages[i].classList.contains('cart__product-current')) {
      sliderImages[i].classList.remove('cart__product-current');
      sliderButtons[i].classList.remove('cart__control-current')

    }
    sliderImages[index].classList.add('cart__product-current');
    sliderButtons[index].classList.add('cart__control-current')
  }
}
sliderButtons.forEach((item, index) => item.addEventListener('click', () => toggleSliderClass(index)));

//Корзина

const decrement = document.querySelector('.cart__product-decrement');
const increment = document.querySelector('.cart__product-increment');
const count = document.querySelector('.cart__product-count');
const totalPrice = document.querySelector('.cart__total-price');
const price = document.querySelector('.cart__price');
const addButton = document.querySelector('.cart__add-btn');
const cartBC = document.querySelector('.header__vector-svg');
const cart = document.querySelector('.header__cart-svg');
const cartCountInHeader = document.querySelector('.header__cart-count')
decrement.addEventListener('click', function () {
  if (count.value !== 0) {
    count.value--;
    totalPrice.textContent = count.value * (price.textContent);

  }
})
increment.addEventListener('click', function () {
  count.value++;
  totalPrice.textContent = count.value * (price.textContent)
})

addButton.addEventListener('click', function () {
  !cartBC.classList.contains('cart__vec--added') && cartBC.classList.add('cart__vec--added')
  !cart.classList.contains('cart__cart--added') && cart.classList.add('cart__cart--added');
  cartCountInHeader.textContent = Number(cartCountInHeader.textContent) + Number(count.value);
  cartCountInHeader.classList.add('header__cart-count--added');
  count.value = 1;
  totalPrice.textContent = price.textContent;
  console.log(count.value);
})

//Mail

const mailButton = document.querySelector('.mailing__button');
const mailInput = document.querySelector('.mailing__input');
const mailErr = document.querySelector('.mailing__input-err');
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function onInput() {
  if (isEmailValid(mailInput.value)) {
    if (mailInput.classList.contains('mailing__input--invalid')&&mailErr.classList.contains('mailing__input-err--invalid')) {
      mailInput.classList.remove('mailing__input--invalid')
      mailInput.classList.add('mailing__input--valid');
      mailErr.classList.remove('mailing__input-err--invalid')
    }else{
      mailInput.classList.add('mailing__input--valid')
    }
  } else {
    if (mailInput.classList.contains('mailing__input--valid')) {
      mailInput.classList.remove('mailing__input--valid')
      mailInput.classList.add('mailing__input--invalid')
      mailErr.classList.add('mailing__input-err--invalid')
    }else{
      mailInput.classList.add('mailing__input--invalid')
      mailErr.classList.add('mailing__input-err--invalid')
    }
  }
}

mailInput.addEventListener('input', onInput);

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value)
};
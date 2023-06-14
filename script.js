'use strict';

let users = document.getElementById('page-views');
let price = document.getElementById('price');
const priceMobile = document.getElementById('price-mobile');
const priceUserRange = document.getElementById('number-users');
const toggleTime = document.getElementById('time');

const calcUser = function () {
  users.textContent = `${priceUserRange.value * 10}K Pageviwes`;
  if (priceUserRange.value == 0) {
    users.textContent = 'Less than 10K Pageviwes';
  }
};

const calcPrice = function () {
  calcUser();
  const basePrice = priceUserRange.value * 8;
  const basePriceDiscount = basePrice * 0.25;
  const yearlyPrice = basePrice - basePriceDiscount;

  if (toggleTime.checked) {
    price.textContent = `$${yearlyPrice}.00`;
    priceMobile.textContent = `$${yearlyPrice}.00`;
    // console.log('Checkbox is selected');
    if (priceUserRange.value == 0) {
      price.textContent = '$3.00';
      priceMobile.textContent = '$3.00';
    }
  } else {
    price.textContent = `$${basePrice}.00`;
    priceMobile.textContent = `$${basePrice}.00`;
    if (priceUserRange.value == 0) {
      price.textContent = '$4.00';
      priceMobile.textContent = '$4.00';
    }
  }
};

calcPrice();

priceUserRange.addEventListener('input', function () {
  console.log(priceUserRange.value);
  calcUser();
  calcPrice();
});

toggleTime.addEventListener('click', function () {
  calcPrice();
});

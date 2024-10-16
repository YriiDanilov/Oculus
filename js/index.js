'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__contnet-item');

tabItem.forEach(function(element) {
  element.addEventListener('click', open);
});

function open (event) {
  const button = event.currentTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove('tabs__btn-item--active')
  })

  tabContent.forEach(function(item){
    item.classList.remove('tabs__contnet-item--active')
  })

  event.currentTarget.classList.add('tabs__btn-item--active');
  document.querySelector(`#${button}`).classList.add('tabs__contnet-item--active');
}


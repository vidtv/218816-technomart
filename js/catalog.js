/* Оживление модального окна с сообщением о добавлении в корзину */

var basketAdd = document.querySelectorAll('.to-buy-item');
var basketPopup = document.querySelector('.basket-add');
var basketPopupClose = document.querySelector('.basket-popup-close');
var continuePurchases = document.querySelector('.button-continue-buy');

/* перегоняем коллекцию кнопок "Купить" в массив */
var basketAddArray = Array.prototype.slice.call(basketAdd);

basketAddArray.forEach(function(item) {
  item.addEventListener('click', function(event) {
    basketPopup.classList.add('basket-add-show');
  });
});

basketPopupClose.addEventListener('click', function(event) {
  basketPopup.classList.remove('basket-add-show');
});

continuePurchases.addEventListener('click', function(event) {
  basketPopup.classList.remove('basket-add-show');
})

window.addEventListener('keydown', function(event) {
  if(event.keyCode === 27) {
    if(basketPopup.classList.contains('basket-add-show')) {
      basketPopup.classList.remove('basket-add-show');
    }
  }
});

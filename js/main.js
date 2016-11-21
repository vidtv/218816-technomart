/* Оживление формы обратной связи */

var feedbackPopup = document.querySelector('.email-popup');
var feedbackForm = document.querySelector('form');
var feedbackButton = document.querySelector('.button-contacts');
var feedbackPopupClose = feedbackPopup.querySelector('.email-popup-close');
var feedbackName = feedbackPopup.querySelector('.email-name textarea');
var feedbackMail = feedbackPopup.querySelector('.email-address textarea');
var storageName = localStorage.getItem('feedbackName');

feedbackButton.addEventListener('click', function(event) {
  event.preventDefault();
  feedbackPopup.classList.add('email-popup-show');
  if(storageName) {
    feedbackName.value = storageName;
    feedbackMail.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackPopupClose.addEventListener('click', function(event) {
  feedbackPopup.classList.remove('email-popup-show');
});

feedbackForm.addEventListener('submit', function(event) {
  if(feedbackName) {
    localStorage.setItem('feedbackName', feedbackName.value);
  }
});

window.addEventListener('keydown', function(event) {
  if(event.keyCode === 27) {
    if(feedbackPopup.classList.contains('email-popup-show')) {
      feedbackPopup.classList.remove('email-popup-show');
    }
  }
});

/* Оживление модального окна с картой проезда */

var mapPopup = document.querySelector('.map-popup');
var mapPopupOpen = document.querySelector('.open-map-popup');
var mapPopupClose = document.querySelector('.map-popup-close');

mapPopupOpen.addEventListener('click', function(event) {
  event.preventDefault();
  mapPopup.classList.add('map-popup-show');
})

mapPopupClose.addEventListener('click', function(event) {
  mapPopup.classList.remove('map-popup-show');
})

window.addEventListener('keydown', function(event) {
  if(event.keyCode === 27) {
    if(mapPopup.classList.contains('map-popup-show')) {
      mapPopup.classList.remove('map-popup-show');
    }
  }
});

/* добавляем анимацию для формы */

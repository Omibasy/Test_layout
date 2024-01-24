const defaultSelect = () => {
  const element = document.querySelector('.select-default');
  const choices = new Choices(element, {
    searchEnabled: false,
    noResultsText: false,
    shouldSort: false,
  });


};

defaultSelect();


let tabsBtn = document.querySelectorAll('.company__btn');
let tabsItem = document.querySelectorAll('.company__card');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('company__btn--active');
    });

    e.currentTarget.classList.add('company__btn--active');

    tabsItem.forEach(function (Titel) {
      Titel.classList.remove('display-block');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('display-block');
  });
});


let acPeople = new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__trigger',
  panelClass: 'accordion__panel',
  activeClass: 'accordion--active'
});

acPeople.open(0);


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    100: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    740: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1031: {
      slidesPerView: 4,
    },
  },
});

let search = document.querySelector('.search-btn');
let searchInput = document.querySelector('.header__input');
let searchMenu = document.querySelector('.header__search');
let searchButton = document.querySelectorAll('.header__search__btn');

search.addEventListener('click',
  function () {
    searchMenu.classList.toggle('header__search--active');
    searchInput.classList.toggle('header__input--active');
    search.classList.toggle('btn--on');
  });

searchButton.forEach(
  function (el) {
    el.addEventListener('click',
      function () {
        searchMenu.classList.remove('header__search--active');
        searchInput.classList.remove('header__input--active');
        setTimeout(() => { search.classList.remove('btn--on') }, 180);
      })
  });

let playBtn = document.querySelectorAll('.ac__btn');
let playBtnSpanOne = document.querySelectorAll('.ac__btn__span-one');
let playBtnSpanTwo = document.querySelectorAll('.ac__btn__span-two');
let playCardBtn = document.querySelectorAll('.podcasts__svg-play');
let pauseCardBtn = document.querySelectorAll('.podcasts__svg-pause');
let CardBtn = document.querySelectorAll('.podcasts__button-play');


for (let i = 0; i < playBtn.length; i++) {

  playBtn[i].addEventListener('click',
    function () {
      playBtnSpanOne[i].classList.toggle('span--play-one--active');
      playBtnSpanTwo[i].classList.toggle('span--play-two--active');

      for (let j = 0; j < playBtn.length; j++) {
        if (j != i) {
          playBtnSpanOne[j].classList.remove('span--play-one--active');
          playBtnSpanTwo[j].classList.remove('span--play-two--active');
        }
      }

      for (let index = 0; index < pauseCardBtn.length; index++) {
        pauseCardBtn[index].classList.add('svg-off');
      }

      for (let index = 0; index < playCardBtn.length; index++) {
        playCardBtn[index].classList.remove('svg-off');
      }

    });

}


const validate = new JustValidate('#LogInForm');

let hystmodal = document.querySelector('.hystmodal');
let btnEnter = document.querySelector('.header__enter-btn');
let btnClose = document.querySelectorAll('.hystmodal__close-btn');
let hystmodalInput = document.querySelectorAll('.hystmodal__input');

btnEnter.addEventListener('click',
  function () {
    hystmodal.classList.toggle('hystmodal--active');
    document.body.classList.toggle('stop-scroll');
    btnEnter.classList.toggle('enter--active');
    document.getElementById("Login").focus();


    validate.addField('#Login', [{
        rule: 'required',
        errorMessage: 'Поле логина не должно быть пустым',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: "Логин должен быть больше 2 симвлов"
    },
    {
      rule: 'maxLength',
      value: 10,
      errorMessage: "Логин не может быть больше 11 сомволов"
    },
    {
      rule: 'customRegexp',
      value: /[а-яА-я0-9]+$/gi,
      errorMessage: 'Логин должен состоять из букв русского алфавита или цифв'
    },
    ]);


    validate.addField('#Password', [
      {
        rule: 'required',
        errorMessage: 'Поле пароль не должно быть пустым',
      },
      {
        rule: 'minLength',
        value: 5,
        errorMessage: "Пароль должен быть долее 5 символов"
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: "Пароль не должен превышать 15 символов"
      },
      {
        rule: 'password',
        errorMessage: 'В пароле должны быть буквы латинского алфавиты и цифры',
      },


    ]);

    validate.onSuccess((event) => {
      document.getElementById("LogInForm").submit();
    });

  });


btnClose.forEach(
  function (el) {
    el.addEventListener('click',
      function () {
        hystmodal.classList.remove('hystmodal--active');
        document.body.classList.remove('stop-scroll');
        btnEnter.classList.remove('enter--active');
        validate.removeField('#Login');
        validate.removeField('#Password');


        for (let index = 0; index < hystmodalInput.length; index++) {
          hystmodalInput[index].value = "";
        }
      }
    )
  });

for (let i = 0; i < CardBtn.length; i++) {

  CardBtn[i].addEventListener('click',
    function () {

      if (CardBtn[i].querySelector('.podcasts__svg-play').classList.contains('svg-off')) {
        CardBtn[i].querySelector('.podcasts__svg-pause').classList.add('svg-off');

        CardBtn[i].querySelector('.podcasts__svg-play').classList.remove('svg-off');

        return;
      }
      else {
        for (let index = 0; index < pauseCardBtn.length; index++) {
          pauseCardBtn[index].classList.add('svg-off');
        }

        for (let index = 0; index < playCardBtn.length; index++) {
          playCardBtn[index].classList.remove('svg-off');
        }

        CardBtn[i].querySelector('.podcasts__svg-pause').classList.remove('svg-off');

        CardBtn[i].querySelector('.podcasts__svg-play').classList.add('svg-off');

        for (let j = 0; j < playBtn.length; j++) {

          playBtnSpanOne[j].classList.remove('span--play-one--active');
          playBtnSpanTwo[j].classList.remove('span--play-two--active');

        }

      }
    });
};

const validateLetter = new JustValidate('#letterForm');

validateLetter.addField('#comment', [
  {
    rule: 'required',
    errorMessage: 'Комментарий не должен быть пустым',
  },
  {
  rule: 'minLength',
  value: 15,
  errorMessage: "Комментарий слишком короткий"
},

]);

validateLetter.addField('#UserName', [
  {
    rule: 'required',
    errorMessage: 'Поле имени не должно быть пустым',
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Имя пользователя слишком короткое'
  },
  {
    rule: 'maxLength',
    value: 15,
    errorMessage: "Имя пользователя слишком длинное"
  },
  {
    rule: 'customRegexp',
    value: /[а-яА-я]+$/gi,
    errorMessage: 'Имя пользователя должно быть написано на русском'
  },

]);

validateLetter.addField('#UserEmail', [
  {
    rule: 'required',
    errorMessage: 'Email не должен быть пустым',
  },
  {
    rule: 'minLength',
    value: 5,
    errorMessage: 'Email слишком короткий'
  },
  {
    rule: 'maxLength',
    value: 40,
    errorMessage: "Email слишком длинный"
  },
  {
    rule: 'email',
    errorMessage: 'Некорректный Email',
  },

]);

validateLetter.addField('#checkbox', [
  {
    rule: 'required',
    errorMessage: 'Пользовательское соглашение не принято',
  }
]);

validateLetter.onSuccess((event) => {
  document.getElementById("letterForm").submit();
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav-top');
let menuLink = document.querySelectorAll('.link-active');
let menuTwo = document.querySelector('.header__nav-bottom');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    menuTwo.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  });

menuLink.forEach(
  function (el) {
    el.addEventListener('click',
      function () {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        menuTwo.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
      })
  });


let acContainer = document.querySelector('.header__accordion-box');
let acBox = document.querySelector('.header__ac')
let acPanel = document.querySelector('.ac__container');
let swiperBox = document.querySelector('.playlists__swiper');
let swiperList = document.querySelector('.playlists__list');
let swiperItem = document.querySelectorAll('.playlists__item');
var swiperChack = true;

const acHeader = new Accordion('.accordion-box');

var swiperBtn;
swiperBtn = new Swiper(".btnSwiper", {
  slidesPerView: 'auto',
  spaceBetween: 15,
  freeMode: true,
  slideClass: 'swiper-item',
});

window.addEventListener('resize', function (event) {
  ModifiedWindow();
}, true);

window.addEventListener('load', function (event) {
  ModifiedWindow();
});

function ModifiedWindow() {

  if (document.documentElement.clientWidth < 741) {

    if (!swiperChack) {

      acContainer.classList.add('accordion-box');
      acBox.classList.add('ac');
      acPanel.classList.add('ac-panel');
      acPanel.style.height = 0;

      swiperItem.forEach(
        function (el) {
          el.classList.add('swiper-item');
        }
      );

      swiperBox.classList.add('btnSwiper');
      swiperList.classList.add('swiper-wrapper');
      swiperBtn.enable();
      swiperChack = true;
    }
  } else {

    if (swiperChack) {

      swiperItem.forEach(
        function (el) {
          el.classList.remove('swiper-item');
        }
      );

      swiperBox.classList.remove('btnSwiper');
      swiperList.classList.remove('swiper-wrapper');
      swiperBtn.disable();

      acContainer.classList.remove('accordion-box');
      acBox.classList.remove('ac');
      acPanel.classList.remove('ac-panel');
      acPanel.style.height = 'auto';
      swiperChack = false;
    }
  }

};




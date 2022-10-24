(function isWebP() {
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {

      if (support == true) {
         document.querySelector('html').classList.add('webp');
      } else {
         document.querySelector('html').classList.add('no-webp');
      }
   });
})()

const body = document.querySelector('body')
const burger = document.querySelector('.header-burger')
const menu = document.querySelector('.header-main__list')
const header = document.querySelector('.header-main')


function workBurger() {
   if (burger) {
      burger.addEventListener("click", () => {
         burger.classList.toggle("active");
         header.classList.toggle("active")
         menu.classList.toggle("active");
         body.classList.toggle("lock");
         // document.querySelectorAll('.containers-banner__content').forEach(item => {
         //    item.classList.toggle("hidden")
         // })
         document.querySelector('.btn-scroll-up').classList.toggle("hidden")
      })
   }
}

function inputStyle() {
   const inputs = document.querySelectorAll('.callback__item')
   if (inputs.length > 0) {
      inputs.forEach((item) => {
         item.addEventListener("change", (e) => {
            if (e.target.value) {
               e.target.classList.add("active")
            } else {
               e.target.classList.remove("active")
            }
         })
      })
   }
}

function scrollToTop() {
   const btnScrollUp = document.querySelector('.btn-scroll-up')
   if (btnScrollUp) {
      btnScrollUp.addEventListener("click", () => {
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
         })
      })
   }
}
// Services-catalog
const servicesItemMenu = document.querySelectorAll('.services-catalog__item_list')
const servicesTypeMenu = document.querySelectorAll(".services-catalog__group")
function servicesMenu(menuItem) {
   menuItem.forEach((elem) => {
      elem.querySelector("div").addEventListener("click", (e) => {
         elem.classList.toggle("open")
      })
   })
}
servicesMenu(servicesItemMenu)
servicesMenu(servicesTypeMenu)
scrollToTop()
workBurger()
inputStyle()


$(document).ready(function () {
   $('.block5-slider').slick({
      slidesToScroll: 1,
      slidesToShow: 1,
   });
});


// Popup
const popupLinks = document.querySelectorAll(".modal__link");
const popupCloseIcon = document.querySelectorAll(".modal__close");

let unlock = true;

const timeout = 500;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
         if (curentPopup.classList.contains("open")) {
            popupClose(curentPopup);
         }
      });
   }
}




if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener("click", function (e) {
         popupClose(el.closest(".modal"));
         e.preventDefault();
      });
   }
}


function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector(".modal.open");
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add("open");
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest(".modal__content")) {
            popupClose(e.target.closest(".modal"));
         }
      })
   }
}
function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove("open");
      if (doUnlock) {
         bodyUnLock();
      }
   }
}

function bodyLock() {
   // body.classList.add("lock");


   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnLock() {
   // body.classList.remove("lock");
   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout)
}


document.addEventListener("keydown", function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector(".modal.open");
      popupClose(popupActive);
   }
})

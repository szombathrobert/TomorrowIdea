var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    grabCursor: true,
    speed: 1000,
    parallax: true,
    autoplay: false,
    effect: "slide",
    mousewheel: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        direction: "horizontal",
    },

  });
  

//   const swiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     direction: "vertical",
//     loop: true,
//     grabCursor: true,
//     speed: 1000,
//     paginationClickable: true,
//     parallax: true,
//     autoplay: false,
//     effect: "slide",
//     mousewheelControl: 1,

//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  

//   });
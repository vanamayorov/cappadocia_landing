$(function () {
    $("#menu").on("click", "a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      
      //забираем идентификатор бока с атрибута href
      let id = $(this).attr("href");
      
        //узнаем высоту от начала страницы до блока на который ссылается якорь
      let top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1500 мс
      $("html, body").animate({ scrollTop: top }, 3000);
    });


  $(".fairy-tail__slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 631,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".our_trip__slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    autoplay: true,
    fade: true,
  });
  
});

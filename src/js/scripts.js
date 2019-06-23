$(document).ready(function(){
  // Инициализация wow анимации
        new WOW().init();
  // Слайдер секции hero
        $('.hero-slider').slick({
          arrows: false,
          dots: true,
          infinite: true,
          speed: 600,
          autoplay: true,
          autoplaySpeed: 3000,
          appendDots: $('.hero__dots'),
          variableWidth: true,
          responsive: [
      {
        breakpoint: 575,
        settings: {
          dots: false
        }
      }
    ]
        });
  // Слайдер секции с отзывами
        $('.feedback-slider').slick({
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
          infinite: true,
          speed: 600,
          appendDots: $('.feedback__dots'),
          variableWidth: true,
          responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]
        });
  // Валидация форм
  $('#callback-form').validate( {
          errorElement: "div",
          errorClass: "invalid",
          rules: {
            username: {
              required: true,
              minlength: 2
            },
            phone: {
              required: true,
              minlength: 1
            },
          },
          messages: {
            username: {
              required: "Заполните поле",
              minlength: jQuery.validator.format("Добавить минимум {0} символа")
            },
            phone: {
              required: "Заполните поле"
            }
          }
        });
  
  $('#modal-form').validate( {
          errorElement: "div",
          errorClass: "invalid",
          rules: {
            phone: {
              required: true
            }
          },
          messages: {
            phone: {
              required: "Заполните поле"
            }
          }
        });
  // Маска для телефона
  $(".phone").mask("+7 (999) 999-99-99");
  // Обработка и отправка форм
  
  });
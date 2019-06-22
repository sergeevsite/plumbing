$(document).ready(function() {
// Меню для мобильных телефонов
$('.burger__button').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('burger__button_active');
  $('.burger__item').toggleClass('burger__item_active');
});
// Якорные ссылки
$(".navbar-list__text").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
  });
$(".burger__item").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
  });
  
// Модальное окно
    var button = $('#button');
    var close = $('#close');
    var modal = $('#modal');
  
    button.on('click', function() {
      modal.addClass('modal_active');
    });
    close.on('click', function() {
      modal.removeClass('modal_active');
    });

    var closeScs = $('#close-scs');
    var success= $('#success');
//Форма в модального окна в шапке
    $('.modal-dialog__button').on('click', function(e) {
      if ($('#modal-phone').val().length) {
        e.preventDefault();
        success.addClass('success_active'); 
        modal.removeClass('modal_active');
        $('input').removeClass('valid')
      } else {
      }
    });
// Форма в секции callback
    $('.form__button').on('click', function(e) {
      if ($('#callback-name').val().length && $('#callback-phone').val().length) {
        e.preventDefault();
        $(this).closest('form').find("input[type=text]").val("");
        $(this).closest('form').find("input[type=tel]").val("");
        success.addClass('success_active'); 
        modal.removeClass('modal_active');
        $('input').removeClass('valid')
      } else {
      }
    });
// Кнопка закрыть в модальном окне success
    closeScs.on('click', function(e) {
      e.preventDefault();
      success.removeClass('success_active');
    });
// Интервал закрытия окна success
    setInterval(function() {
      success.removeClass('success_active');
    }, 3000 );
});

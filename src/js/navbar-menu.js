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
});

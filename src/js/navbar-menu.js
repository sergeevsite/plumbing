$(document).ready(function() {
$('.burger__button').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('burger__button_active');
  $('.burger__item').toggleClass('burger__item_active');
});
});
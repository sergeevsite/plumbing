$('.navbar-burger__button').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('navbar-burger__button_active');
  $('.navbar-burger__item').toggleClass('navbar-burger__item_active');
});
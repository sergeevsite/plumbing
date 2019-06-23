$(document).ready(function() {

// Меню для мобильных телефонов
$('.burger__button').on('click', function(e){
  e.preventDefault();
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

$('.burger__item').click(function (e){
  e.preventDefault();
  $('.burger__item').removeClass('burger__item_active');
  $('.burger__button').removeClass('burger__button_active');
});

// Модальное окно
    var button = $('#navbar-button');
    var close = $('#close');
    var modal = $('#modal');
  
    button.on('click', function() {
      modal.addClass('modal_active');
    });

    close.on('click', function() {
      modal.removeClass('modal_active');
    });

    var closeScs = $('#close-scs');
    var modalSuccess = $('#success');

//Форма в модального окна в шапке
    $('#modal-form').on('submit', function(event) {
      event.preventDefault();
      if ($('#modal-phone').val().length) {
        $.ajax({
          url: 'mail.php',
          type: 'POST',
          data: $(this).serialize(),
          success: function(data) {
            $(this).closest('form').find("input[type=tel]").val('');
            modalSuccess.addClass('success_active'); 
            modal.removeClass('modal_active');
            $('input').removeClass('valid')
          }
        }); 
      } else {
      }
    });

// Кнопка закрыть в модальном окне success
    closeScs.on('click', function(e) {
      e.preventDefault();
      modalSuccess.removeClass('success_active');
    });

// Интервал закрытия окна success
    setInterval(function() {
      modalSuccess.removeClass('success_active');
    }, 3000 );

// Обработка и отправка формы через AJAX в секции callback
  $('#callback-form').on('submit', function(event){
    event.preventDefault();
    var len = $('#callback-name').val().length;
      if ( len >= 2 ){
        if ($('#callback-name').val().length && $('#callback-phone').val().length) {
          $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data) {
              $(this).closest('form').find("input[type=text]").val('');
              $(this).closest('form').find("input[type=tel]").val('');
              modalSuccess.addClass('success_active');
              $('input').removeClass('valid')
            }
          });
        } else {
        }
      } else {
        return;
      }
    });
});

var news = $('.advantages');
var newsTop = news.offset().top;
$(window).bind('scroll', function(){
  var windowTop = $(this).scrollTop();
  if (windowTop > newsTop) {
    $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9be676bab37bd38be921d1531fa97f706de84b746655eb47f497f821804e220a&amp;width=100%25&amp;height=666&amp;lang=ru_RU&amp;scroll=false&amp;apikey=c2c92151-9461-4524-b99a-8c545a54b5ca"></script>')
    $(window).unbind('scroll');
  }
  
});

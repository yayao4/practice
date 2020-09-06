$(function(){
 $("#ac-wrapper").on("click",function(){
   $(".ac-container").slideToggle();
   $(".ac-container").toggleClass("active");
 });

 $(window).on('load scroll', function(){
  if ($(window).scrollTop() > 80) {
    $('.return').fadeIn(300);
   } else {
    $('.return').fadeOut(300);
   }
});

 $('.return').click(function() {
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html,body').animate({
    'scrollTop': position
  }, 500);
});

$(function(){
  $(".course-item img").click(function() {
    $("#graydisplay").html($(this).prop('outerHTML'));
    $("#graydisplay").fadeIn();
  });
  $("#graydisplay, #graydisplay img").click(function() {
    $("#graydisplay").fadeOut();
  });
});

});
$(document).ready(function() {
  $(".click2").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
  $(".click1").click(function() {
    $("#fact1-showing").fadeToggle();
    $("#fact1-hidden").fadeToggle();
  });
});

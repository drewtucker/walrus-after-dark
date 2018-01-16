$(document).ready(function() {
  var clickables = ["fact1", "walrus", "fact2"];

  clickables.forEach(function(clickable){
    $("." + clickable).click(function(){
        $("#" + clickable).slideToggle();
        // $("#" + clickable + "-hidden").slideToggle();
    });
  });



  // $(".walrus").click(function() {
  //   $("#walrus-showing").slideToggle();
  //   $("#walrus-hidden").slideToggle();
  // });
  // $(".fact1").click(function() {
  //   $("#fact1-showing").fadeToggle();
  //   $("#fact1-hidden").fadeToggle();
  // });
  $("button#toNight").click(function(){
    $("body").toggleClass("night-mode");
  });
  $(".intro").click(function(){
    $("#idIntro").toggleClass("introClass");
  });

});

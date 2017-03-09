$(document).ready(function() {
  $("#someButton").on("click", function() {
    if ($(this).hasClass("blue")) {
      console.log("HERE");
      $(this).removeClass("blue");
      $(this).addClass("red");
    } else {
      $(this).removeClass("red");
      $(this).addClass("blue");
    }
  });
  $("#someButton").on("mouseenter mouseleave", function() {
    console.log("HOVERING");
    $(this).toggleClass("green");
  });
})

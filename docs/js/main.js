// Навигация в шапке

$(".btn").click(function(){
  $(".input").toggleClass("active").focus;
  $(this).toggleClass("animate");
  $(".input").val("");
});

// Навигация в шапке
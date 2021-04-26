$(window).on("load",function() {
  $(".loading_container").each(function(){
    $(this)
    .delay(2000)
  })
  $(".loading_container").fadeOut("fast");
});

$(".start").click("click",function(){
  $(".character_container").fadeOut("fast");
});

$(".loginBtn").click("click",function(){
  $("form").remove("form");
})
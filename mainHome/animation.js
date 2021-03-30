$(window).on("load",function() {
    $(".loading_container").each(function(){
    $(this)
    .delay(0)
    })
    $(".loading_container").fadeOut("slow");
    $(".character_container").each(function(){
    $(this)
    .delay(0)
    })
    $(".character_container").fadeOut(0);
});

$(".loginBtn").click("click",function() {
$(".login_container").fadeOut(0);
});

$(".submit").click("click",function() {
$(".login_Form").fadeOut(0);
});
$(window).on("load",function() {
    $(".loading_container").each(function(){
    $(this)
    .delay(2000)
    })
    $(".loading_container").fadeOut("slow");
    $(".character_container").each(function(){
    $(this)
    .delay(5000)
    })
    $(".character_container").fadeOut(1000);
});

$(".loginBtn").click("click",function() {
$(".login_container").fadeOut(0);
});

$(".submit").click("click",function() {
$(".login_Form").fadeOut(0);
});
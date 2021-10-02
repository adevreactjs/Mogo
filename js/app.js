$(function(){
    var header = $("#header");
    var introH = $("#intro").innerHeight();
    var scrollOffSet = $(window).scrollTop();
    checkScroll(scrollOffSet);

    $(window).on("scroll",function(){
        scrollOffSet = $(this).scrollTop();
        checkScroll(scrollOffSet);
    });

function checkScroll(scrollOffSet) {
    if( scrollOffSet >= introH) {
        header.addClass("header-fixed");
    } else {
        header.removeClass("header-fixed");
    }
}


$("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    var $this = $(this)
    var blocktId = $this.data("scroll");
    var blockOffSet = $(blocktId).offset().top;
    $("nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
        scrollTop: blockOffSet 
    }, 500)
}) 

$("nav_toggle").on("click", function(event) {
    event.preventDefault();

    $("nav").toggleClass("active")
})

});  
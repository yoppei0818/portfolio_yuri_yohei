$(function(){
    $(".header-nav ul a").click(function(){
        var target = $($(this).attr("href")).offset().top;
        target -= 90;
        $("html,body").animate({scrollTop: target}, 1000);
        return false;
    });

});
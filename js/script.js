$(document).ready(function() {
    $(".nav-header ul li a").hide().css({"padding-right":"40px","margin-left":"20px"});

    $(".nav-header ul li button").click(function() {
        $("li a").show(500).css({"padding-right":"40px","margin-left":"20px"});
    });

    $(".nav-header ul li button").mouseenter(function() {
        $("li a").show(500).css({"padding-right":"40px","margin-left":"20px"});
    });

    $(".nav-header").mouseleave(function() {
        $("li a").hide(500).css({"padding-right":"40px","margin-left":"20px"});
    });

});
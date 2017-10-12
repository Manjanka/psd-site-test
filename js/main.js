$(".banner span").click(function() {
    $(".banner span").css("background", "#c0bcc1");
	$(this).css("background", "#99dfed");
	var source = $(this).children().attr("src");
    $(".banner div").css({
        "background": "url("+source+")",
        "background-position": "69% 42%",
        "background-repeat": "no-repeat"
    });
});
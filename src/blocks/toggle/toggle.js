$(document).ready(function(){
    $(".toggle").click(function() {
        if ($(this).hasClass("toggle_enabled")) {
            $(this).addClass("toggle_disabled").removeClass("toggle_enabled");
            return
        }
        if ($(this).hasClass("toggle_disabled")) {
            $(this).addClass("toggle_enabled").removeClass("toggle_disabled");
            return
        }
    })
})
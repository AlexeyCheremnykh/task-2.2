$(document).ready(function () {
    $(".tick-box").click(function () {
        if ($(this).hasClass("tick-box_checked")) {
            $(this).addClass("tick-box_unchecked").removeClass("tick-box_checked");
            return
        }
        if ($(this).hasClass("tick-box_unchecked")) {
            $(this).addClass("tick-box_checked").removeClass("tick-box_unchecked");
            return
        }
    })
})
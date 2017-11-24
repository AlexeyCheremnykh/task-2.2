$(document).ready(function () {
    /*$(".slider__circle").mousedown(function() {
        $(this).mousemove(function (event) {
            var offset = $(this).offset();
            x = event.pageX - offset.left;
            $(this).css("left", x);
        }).mouseup(function () {
            $(this).unbind('mousemove');
        }).mouseout(function () {
            $(this).unbind('mousemove');
        });      
    });*/
    $(".slider").click(function(event) {        
        var offset = $(this).offset();
        var x = event.pageX - offset.left - 10;
        $(".slider__circle").css("left", x);
    });
});

$(document).ready(function () {
    $(".stages").slider({
        range: "min",
        min: 1,
        max: 5,        
        create: function () {
            $(".stages__handle").text($(this).slider("value"));
        },
        slide: function (event, ui) {
            $(".stages__handle").text(ui.value);
            ui.handle.offsetLeft = ui.handle.offsetLeft - 100;
            $(".ui-slider-range", this).css("background", "#e75735");            
        }
    })
    .slider("pips");
});
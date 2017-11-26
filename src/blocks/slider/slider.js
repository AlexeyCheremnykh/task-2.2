$(document).ready(function () {
    $(".slider_type-a")
        .slider({
            min: 0,
            max: 100,            
        })
        .slider("float");

    $(".slider_type-b")
        .slider({
            range: "min",            
            min: 0,
            max: 100,
            step: 25,            
            slide: function () {            
                $(".ui-slider-range", this).css("background", "#4eb7a8");         
            }
        })
        .slider("pips", {
            rest: "label"              
        });
});

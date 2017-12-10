$(document).ready(function () {    
    $(".percentage").each(function() {       
        $(this).circleProgress({
            value: $(this).data("value") / 100,           
            fill: "#e75735",
            thickness: $(".percentage canvas").width() / 19,
            emptyFill: "rgba(255, 255, 255, 1)",
            startAngle: -Math.PI / 2,
            insertMode: "prepend"
        })
       
        //value text
        $(this).on('circle-animation-progress', function (e, p, v) {
            var obj = $(this).data('circle-progress'),
                ctx = obj.ctx,
                s = obj.size,
                sv = (100 * v).toFixed();                

            ctx.save();
            ctx.font = "300 2.5rem Lato";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = "#9d9d9d";
            ctx.fillText(sv, s / 2, s / 2);
            ctx.restore();
        });       
    });
});
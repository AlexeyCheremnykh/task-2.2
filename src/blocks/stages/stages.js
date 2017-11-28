$(document).ready(function () {
    /*$(".stages").steps({
        headerTag: "h3"        
    });*/

    $(".stages__stage").click(function() {
        var i = $(this).index();
        for (j = i; j <= $(".stages__stage").last().index(); j++) {
            $($(".stages__stage").get(j))
                .addClass("stages__stage-inactive")
                .removeClass("stages__stage-active");
        }        
        while (i >= 0) {            
            $($(".stages__stage").get(i))
                .addClass("stages__stage-active")
                .removeClass("stages__stage-inactive");
            i = i - 1;    
        }    
    })
});
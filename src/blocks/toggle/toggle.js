$(document).ready(function(){
    $(".toggle").click(function() {
        if ($(this).hasClass("toggle-on")) {            
            $(this).addClass("toggle-off").removeClass("toggle-on");
            return
        }
        if ($(this).hasClass("toggle-off")) {           
            $(this).addClass("toggle-on").removeClass("toggle-off");
            return
        }        
    })
})
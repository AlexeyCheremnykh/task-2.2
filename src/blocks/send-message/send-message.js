$(document).ready(function() {
    $(".send-message .standard-button").click(function(event) {        
        $(".send-message").validate({
            errorPlacement: function (error, element) {            
            }                    
        });                 
        $("input").each(function() {
            if ($(this).valid()) {            
                $(".send-message__validation-message", $(this).parent())
                    .text("THANKS!")
                    .removeClass("send-message__validation-message_error")
                    .animate({
                        opacity: 1
                    }, 700)
            } else {
                $(".send-message__validation-message", $(this).parent())
                    .text("ERROR!")
                    .addClass("send-message__validation-message_error")
                    .animate({
                        opacity: 1
                    }, 700)
            }
        });
    })
})
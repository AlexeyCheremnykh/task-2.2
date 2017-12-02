$(document).ready(function() {
    $(".location__map")
        .gmap3({
            address: "San Francisco, CA, 1259 California ST",
            zoom: 14            
        })
        .marker({
            address: "San Francisco, CA, 1259 California ST",
            icon: {
                url: "img/map-marker-icon.png",                
                anchor: new google.maps.Point(20, 56)
            },
            draggable: true                       
        })
});
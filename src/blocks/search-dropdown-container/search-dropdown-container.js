$(document).ready(function() {
    $($(".search__field").get(1))
        .addClass("search__field_not-found")
        .attr("placeholder", "I've not found what I'm looking for...");
})
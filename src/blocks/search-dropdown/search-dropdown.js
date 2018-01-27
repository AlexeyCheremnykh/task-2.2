$(document).ready(function() {
    $($(".search__field").get(1))
        .addClass("search__field_not-found")
        .click(function() {
            $(this)
                .removeClass("search__field_not-found")
                .attr("placeholder", "Search");
        });
})
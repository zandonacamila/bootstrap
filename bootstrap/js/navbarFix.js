$("#collapse-button").on("show.bs.collapse", function() {
    $(".casaFina-banner").css("transform", "translate(-50%, 10%)");
});

$("#collapse-button").on("hide.bs.collapse", function() {
    $(".casaFina-banner").css("transform", "translate(-50%, -50%)");
});
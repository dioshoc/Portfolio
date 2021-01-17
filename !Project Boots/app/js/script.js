$(function () {
    /* Start Welcome Section */
    $("#scroll_bottom").click(function () {
        var href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top + "px" });
        return false;
    });
    /* End Welcome Section */
});
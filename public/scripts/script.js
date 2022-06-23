$(document).ready(function () {
    $('#to-do').keydown(function () {
        var message = $("textarea").val();
        if (event.keyCode == 13) {
            if (message == "") {
            } else {
                $('#to-do-form').submit();
            }
            $("textarea").val('');
            return false;
        }
    });
});
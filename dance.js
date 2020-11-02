$(document).ready(function () {
    $('video').mousedown(function (e) {
        if(e.button == 2) { // right click
            return false; // do nothing!
        }
    });
});


/* Vanilla js (defered js). */

var verovioId = 'verovio';
var verovioDiv = document.getElementById(verovioId);
var file = verovioDiv.getAttribute('data-url');
if (typeof file === 'undefined') {
    file = new URLSearchParams(window.location.search).get('file');
}
if (file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, true);
    request.onreadystatechange = function () {
        if (request.readyState != 4 || request.status != 200) {
            return;
        }
        var verovioToolkit = new verovio.toolkit();
        verovioDiv.innerHTML = verovioToolkit.renderData(request.responseText, {});
    };
    request.send();
}

/* jQuery. */
/*
$(document).ready(function() {

    var verovioId = '#verovio';
    var verovioDiv = $(verovioId)
    var file = verovioDiv.data('url');
    if (typeof file === 'undefined') {
        file = new URLSearchParams(window.location.search).get('mei-url');
    }
    if (file) {
        $.ajax({
            url: file,
            dataType: 'text',
            success: function(data) {
                var verovioToolkit = new verovio.toolkit();
                var svg = verovioToolkit.renderData(data, {});
                verovioDiv.html(svg);
            }
        });
    }

});
*/

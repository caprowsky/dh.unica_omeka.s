/* Vanilla js (module). */

import '../vendor/verovio/js/verovio-app.js';

var verovioId = 'verovio';
var verovioDiv = document.getElementById(verovioId);
var file = verovioDiv.getAttribute('data-url');
if (typeof file === 'undefined') {
    file = new URLSearchParams(window.location.search).get('file');
}
if (file) {
    const options = {
        defaultView: 'responsive', // default is 'responsive', alternative is 'document'
        defaultZoom: 2, // 0-7, default is 4
        enableResponsive: true, // default is true
        enableDocument: true // default is true
    }
    const app = new Verovio.App(verovioDiv, options);
    fetch(file)
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            app.loadData(text);
        });
}

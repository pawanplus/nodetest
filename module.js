var fs = require('fs');
var pdf = require('html-pdf');
var PDFImage = require("pdf-image").PDFImage;
var html = fs.readFileSync('./test/test.html', 'utf8');
html = html.replace("px", "pt");
html = html.replace(" vmargins ", " ");
html = html.replace(" pagesize", " ");
var options = {
    format: 'Letter',
    "header": {
        "height": "37px"
    },
    "footer": {
        "height": "37px"
    },
    "zoomFactor": "1", // default is 1
    type: "pdf"
};

pdf.create(html, options).toFile('./test/test.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
});
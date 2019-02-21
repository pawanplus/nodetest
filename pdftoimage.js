var PDFImage = require("pdf-image").PDFImage;

var pdfImage = new PDFImage('./test/test.pdf', {
        graphicsMagick: true,
        convertOptions: {
            "-quality": "100"
          }
    }
);

const getPageCount = require('docx-pdf-pagecount');

getPageCount('./test/test.pdf')
    .then(pages => {
        console.log(pages);
        for (var pageindex = 0; pageindex < pages; pageindex++) {
            pdfImage.convertPage(pageindex).then(function (imagePath) {
                // 0-th page (first page) of the slide.pdf is available as slide-0.png
                fs.existsSync("./test/slide-" + pageindex + ".png") // => true
            });
        }

    })
    .catch((err) => {
        console.log(err);
    });


/*
  pdfImage.convertFile().then(function (imagePaths) {
    console.log(imagePaths);
  },function(err){
      console.log(err);
  }); */
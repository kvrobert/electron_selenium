//require('./takePhoto.js');

var webCapturer = new WebCapturer();
webCapturer.takePhoto( "http://origo.hu", "origo.png", function(){ console.log("Origo Ready"); } );
webCapturer.takePhotos([
    { url: "http://favoritweb.hu/", file: "favoritweb.png" },
    { url: "http://lap.hu/",        file: "lap.png" },
    { url: "http://google.com/",    file: "google.png" }
], function(){ console.log("All Ready"); }); 
webCapturer.close();

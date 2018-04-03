//require('./takePhoto');

var webCapturer = new WebCapturer();

webCapturer.auth( 'http://10.41.96.135' );
// webCapturer.takePhoto( "http://origo.hu", "origo.png", function(){ console.log("Origo Ready"); } );
webCapturer.takePhoto( "http://10.41.96.135/status/NE_Overview", "node.png", function(){ console.log("NODE Capture HTML Ready"); } );


/*        webCapturer.takePhotos([
            { url: "http://favoritweb.hu/", file: "favoritweb.png" },
            { url: "http://lap.hu/",        file: "lap.png" },
            { url: "http://google.com/",    file: "google.png" }
        ], function(){ console.log("All Ready"); }); 

*/        
//webCapturer.close();

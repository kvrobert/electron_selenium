
//require('./takePhoto');

//var webCapturer = new WebCapturer();
var htmlCapturer = new HTMLCapturer();

//webCapturer.auth( 'http://10.41.96.135' );

// isAuthenticated ? => nextStep : Auth()..wait for auth, if OK-> next
/*
while( !isAuthenticated() ){    
    setInterval( () => webCapturer.auth(), 2000 );    
}*/

/*webCapturer.takePhoto( "https://index.hu/", "index.png", function(){ 
                                                        console.log("Origo Ready");
                                                        webCapturer.close(); } );

//webCapturer.takePhoto( "http://10.41.96.135/status/NE_Overview", "node.png", function(){ console.log("NODE Capture HTML Ready"); } );

        webCapturer.takePhotos([
            { url: "http://favoritweb.hu/", file: "favoritweb.png" },
            { url: "http://lap.hu/",        file: "lap.png" },
            { url: "http://google.com/",    file: "google.png" }
        ], function(){ console.log("All Ready");
                    webCapturer.close(); }); 
*/
htmlCapturer.takeHTMLIndex( "https://index.hu/" );
       
//webCapturer.close();

function WebCapturer()
{
    var webDriver = require('selenium-webdriver');
    var by = require('selenium-webdriver').By;
    var until = require('selenium-webdriver').until;    
    var fs = require('fs');      
    var self = this;
    require('chromedriver');
    
    // to the photo capturing
    var queue = [];
    var ready = true;
    var closing = false;
    var isAuthenticated = false;

    // open chrome
    var driver = new webDriver.Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();  
    
    // use user:pass to enter 
    this.auth = function( url ){        
        console.log('Authentication in progress...');
        driver.get( url ).then( () => {
            //    driver.findElement( by.name('username') ).sendKeys('admin_user');
            //    driver.findElement( by.name('password') ).sendKeys('ericsson');
            driver.findElement( by.className('loginForm ng-untouched ng-pristine ng-valid')).submit();  
        } );
        driver.manage().timeouts().implicitlyWait(15000).then( () => console.log('Authenticated') );
    }

    // take one Photo, can use callback too
    this.takePhoto = function( url, file, callBack )
    {      
        queue.push({ url: url, file: file, callBack: callBack });
        nextPhoto();
    };
    // take more photos, it use the function above, can use callbak, but only for the last element
    this.takePhotos = function( list, callBack )
    {
        for( var i in list )
        {
            self.takePhoto( list[i].url, list[i].file, i<list.length-1 ? null : callBack );
        }
    };
    this.close = function()
    {
        closing = true;
        if( queue.length < 1 ) driver.quit();
    };

    function nextPhoto()
    {
        if( ready && queue.length > 0 )
        {
            ready = false;
            var next = queue.shift();

            // open the URL

          /*  driver.get(next.url);                     // eredeti megoldás, működik normál lapokkal
            
            driver.takeScreenshot().then( function( data ) {
                fs.writeFileSync( next.file, data, 'base64' );
                if(next.callBack) next.callBack();
                ready = true;
                nextPhoto();
                if(closing) self.close();
            }); */ 
        
            // callback-os megoldás, talán vár míg betölt az oldal..
            driver.get(next.url).then( () => {
                    driver.takeScreenshot().then( function( data ) {
                    fs.writeFileSync( next.file, data, 'base64' );
                    if(next.callBack) next.callBack();
                    ready = true;
                    nextPhoto();
                    if(closing) self.close();
                });
            } );
        
        }
    }


}

/*var webDriver = require('selenium-webdriver');
var by = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var fs = require('fs');

// open chrome
var driver = new webDriver.Builder().forBrowser('chrome').build();
//max size the window
driver.manage().window().maximize();
//delete all of cookies
//driver.manage().deleteAllCookies();

// navigate to....

driver.get('http://lap.hu/');
// take a screenhot
driver.takeScreenshot().then( function( data ) {
    console.log("Hello from takeScreenShot");
    fs.writeFileSync('img.png', data, 'base64');
});
// close browswer
driver.quit();
*/
function WebCapturer()
{
    var webDriver = require('selenium-webdriver');
    var by = require('selenium-webdriver').By;
    var until = require('selenium-webdriver').until;
    var fs = require('fs');      
    
    var queue = [];
    var ready = true;
    var closing = false;

    var driver = new webDriver.Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();  
    
    this.takePhoto = function( url, file, callBack )
    {
        queue.push({ url: url, file: file, callBack: callBack });
        nextPhoto();
    };
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

            driver.get(next.url);
            
            driver.takeScreenshot().then( function( data ) 
            {
                fs.writeFileSync( next.file, data, 'base64' );
                if(next.callBack) next.callBack();
                ready = true;
                nextPhoto();
                if(closing) self.close();
            });
        }
    }

    var self = this;
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
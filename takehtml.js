
function HTMLCapturer(){
    
    var webDriver = require('selenium-webdriver');
    var by = require('selenium-webdriver').By;
    var until = require('selenium-webdriver').until;
    require('chromedriver');
    var fs = require('fs');      
    var self = this;

    // to the photo capturing
    var queue = [];
    var ready = true;
    var closing = false;
    var isAuthenticated = false;

    // open chrome
    var driver = new webDriver.Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();  

    /*   Nem kell....
    var windowHandler = driver.getWindowHandle();
    var elem = driver.findElement( by.id('agent-detail') );
    console.log( elem );
    */

    // Test for capturing HTML  CPI
    this.takeHTML = function takeHTML( url ){
        
        driver.get(url).then( () =>{
            console.log('From take HTML...');
            var cpiElements = driver.findElements( by.className('message cpi blue xh-highlight') );
            console.log( "Az elemek... " + cpiElements );
        } );
    }

    // Test with index page
    this.takeHTMLIndex = function takeHTML( url ){
            
        driver.get(url).then( () =>{
            console.log('From take HTML...to the index');
            var element = driver.findElements(by.className('blokk-hasab hasab-2 saved')).then( (elementsLength)=>alert( elementsLength ) );
            
           
        } );
    }
    

}


function HTMLCapturer(){
    
    var webDriver = require('selenium-webdriver');
    var by = require('selenium-webdriver').By;
    var until = require('selenium-webdriver').until;
    require('chromedriver');
    var fs = require('fs');      
    var self = this;


    // open chrome
    var driver = new webDriver.Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();  

    var windowHandler = driver.getWindowHandle();
    var elem = driver.findElement( by.id('agent-detail') );
    console.log( elem );
    

    // Test for capturing HTML  
    this.takeHTML = function takeHTML(){
        console.log('From take HTML...');
        var elem = driver.findElements( by.className('message cpi blue xh-highlight') );
        console.log( "Az elemek... " + elem );
    }

}

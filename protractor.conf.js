let webBrowser = require('./config/capabilities.js');

exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //multiCapabilities: [/*webBrowser[process.env.BROWSER]*/],
        //{browserName: 'chrome',},
    capabilities: {
    // webBrowser[process.env.BROWSER],/*{
        'browserName': 'chrome',
        'chromeOptions': {
            // args: ['--headless', '--disable-gpu', '--disable-browser-side-navigation']
            args: ['--disable-browser-side-navigation'] 
          }   
    },
    directConnect: true,
    framework: 'jasmine',
    specs: ['./e2e/specs/test.js'],
    // beforeLaunch: function() {
    //     require('ts-node').register({
    //       project: 'e2e/support/tsconfig.e2e.json'
    //     });
    //   },
    onPrepare: function () {
        // jasmine.getEnv().addReporter(reporter);
        // let jasmineReporters = require('jasmine-reporters');
        // jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        //     consolidateAll: true,
        //     savePath: 'test_report',
        //     filePrefix: 'xmloutput'
        // }));
/*        if (process.env.BROWSER === 'chrome'){
            browser.driver.manage().window().maximize();
        }*/
        // browser.driver.manage().window().setSize(view[process.env.VIEW]);
        // console.log(view[process.env.VIEW])
        browser.driver.manage().window().maximize();
        //console.log(webBrowser[process.env.BROWSER]);
    },
    // afterLaunch: function(exitCode) {
    //     return new Promise(function(resolve){
    //         reporter.afterLaunch(resolve.bind(this, exitCode));
    //     });
    // },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000,
        showColors: true,
        // isVerbose: true,
        includeStackTrace: true,
    },
    // allScriptsTimeout: 120000
};
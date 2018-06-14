'use strict'

let chromeView = required('./view.js').chrome;

let capabilities = {
    chrome: {
        'browserName' : 'chrome',
        'chromeOptions' : {
            'arg' : [chromeView[process.env.VIEW], '--disable-extensions']
        }
        },
    firefox: {
        'browserName' : 'firefox',
        'startup.homepage_welcom_url.additional' : 'about:blank'
    },
    phantomjs: {
        'browserName' : 'phantomjs',
        'phantomjs.binary.path' : required('phantomjs').path
    }
}

module.exports = capabilities
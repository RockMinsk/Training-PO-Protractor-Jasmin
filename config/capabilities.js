let webBrowser = {
    get chrome() {
        return {
            'browserName': 'chrome',
/*            chromeOptions: {
                args: ['disable-infobars'],
                prefs: {
                    credentials_enable_service: false,
                    profile: {
                        password_manager_enabled: false
                    }
                }
            }*/
        };
    },
    get firefox() {
        return {
            'browserName': 'firefox',
            // 'acceptSslCerts': true
        };
    },
    get ie() {
        return {
            'browserName': 'internet explorer',
            'ensureCleanSession': true,
            // 'ignoreZoomLevel': false,
            'acceptSslCerts': true,
            'javascriptEnabled': true,
            // 'nativeEvents': false,
            // 'enableElementCacheCleanup': false,
            // 'ignoreZoomSetting': true,
            'allowBlockedContent': true,
            'ignoreProtectedModeSettings': true,
            // 'initialBrowserUrl': 'https://www.google.by/',
            'ie.ensureCleanSession': true,
            'platform': 'ANY',
            'version': '11'
        };
    },
    get edge() { //MicrosofdWebDriver should be installed on you PC
        return {
            browserName: 'MicrosoftEdge',
            javascriptEnabled: true,
            platform: 'Windows 10',
            version: 'ANY'
        }
    },
};

module.exports = webBrowser;
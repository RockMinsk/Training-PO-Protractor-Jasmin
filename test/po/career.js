let BasePage = require('./basePage.js');

let Career = function() {
    this.url = 'https://www.epam.com/careers';
    this.get = (() => browser.get(url));
    
    this.searchForm = function() {
        this.jobId = element(by.class('job-search__input'));
        this.location = element(by.class('job-search__location'));
        this.locationDropDownElement = element(by.class('select-box-results'));
        this.skills = element(by.class('multi-select-filter'));
        this.skillsDropDownElement = element(by.class('multi-select-dropdown'));
        this.findButton = element(by.class('job-search__submit'));

        this.typeKeyword = function(keyword) {
            let self = this;
            return self.jobId.sendKeys(keyword)
                .then(() => self.findButton.click())
                .then(() => require('./job.js'))
        }

        this.selectLocation = function() {
            let self = this;
            return self.location.click()
                .then(() => browser.waitForVisible(locationDropDownElement));

        }

        this.selectSkills = function(){
            let self = this;
            return self.skills.click()
                .then(() => browser.waitForVisible(skillsDropDownElement));
        }
 
        this.clickFindButton = function () {
            let self = this;
            return self.findButton.click()
                .then(() => require('./job.js'))
        }
    }

};

Career.prototype = BasePage;
module.exports = new Career();
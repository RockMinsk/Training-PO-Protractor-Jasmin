let SearchForm = function() {
    this.jobId = element(by.css('.job-search__input'));
    this.location = element(by.css('.job-search__location'));
    this.locationDropDownElement = element(by.css('.select-box-results'));
    this.skills = element(by.css('.multi-select-filter'));
    this.skillsDropDownElement = element(by.css('.multi-select-dropdown'));
    this.findButton = (() => element(by.css('.job-search__submit')));

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
        return Promise.resolve()
            .then(() => browser.wait(until.visibilityOf(self.findButton)), 5000, `Element ${self.findButton} is missing in the DOM`)
            .then(() => browser.wait(until.elementToBeClickable(self.findButton)), 5000)
            .theh(() => self.findButton.click())
            .then(() => require('./job.js'))
    };
}

module.export = new SearchForm();
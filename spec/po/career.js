const BasePage = require('./basePage.js');
const EC = protractor.ExpectedConditions;

let Career = function() {
    this.url = 'https://www.epam.com/careers';
    this.get = function() { 
        browser.get(this.url);
    };
    this.currentUrl = function() {
        return this.url;
    }

    const jobId = element(by.css('.job-search__input'));
    const jobIdDropDownElement = element(by.css('.autocomplete-suggestions'));
    const location = element(by.css('.selection'));
    const locationDropDownElement = element(by.css('.select-box-results'));
    const skills = element(by.css('.multi-select-filter'));
    const skillsDropDownElement = element(by.css('.multi-select-dropdown'));
    const findButton = element(by.xpath('//button[@class="job-search__submit"]'));

    this.typeKeyword = function(keyword) {
        return jobId.sendKeys(keyword)
            .then(() => browser.wait(EC.visibilityOf(jobIdDropDownElement), 5000, 'Element is not visible'));
    }

    this.selectLocation = function() {
        return location.click()
            .then(() => browser.wait(EC.visibilityOf(locationDropDownElement), 5000, 'Element is not visible'));
    }

    this.selectSkills = function(){
        return skills.click()
            .then(() => browser.wait(EC.visibilityOf(skillsDropDownElement), 5000, 'Element is not visible'));
    }

    this.clickFindButton = function () {   
        return browser.wait(EC.visibilityOf(findButton), 5000, 'Element is not visible')
            .then(() => browser.wait(EC.elementToBeClickable(findButton), 5000, 'Element is not clickable'))
            .then(() => findButton.click())
    };
};

Career.prototype = BasePage;
module.exports = new Career();
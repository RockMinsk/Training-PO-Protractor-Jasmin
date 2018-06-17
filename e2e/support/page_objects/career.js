const { browser, by, element, protractor, ElementArrayFinder } = require('protractor');

const BasePage = require('./basePage.js');
const EC = protractor.ExpectedConditions;

let Career = function() {
    this.url = 'https://www.epam.com/careers';
    this.get = function() { 
        browser.get(this.url);
    };
    this.currentUrl = function() {
        return this.url;
    };

    const jobId = element(by.css('.job-search__input'));
    const jobIdDropDownElement = element(by.css('.autocomplete-suggestions'));
    const jobIdDropDownElements = element.all(by.css('.autocomplete-suggestions'));
    const location = element(by.css('.selection'));
    const locationDropDownElement =element(by.css('.select-box-results'));
    const locationDropDownElements = element.all(by.css('.optgroup'));
    const skills = element(by.css('.multi-select-filter'));
    const skillsDropDownElement = element(by.css('.multi-select-dropdown'));
    const skillsDropDownElements = element.all(by.css('.multi-select-dropdown li span'));
    const findButton = element(by.xpath('//button[@class="job-search__submit"]'));

    // Search Form methods
        //Methods for the 'Keyword or Job ID' input field
    this.jobId_typeTextInInputField = keyword => {
        return jobId.sendKeys(keyword)
            .then(() => browser.wait(EC.visibilityOf(jobIdDropDownElement), 5000, 'Element is not visible'));
    };

    this.JobId_getAllAvailableOptions = () => {
        return jobIdDropDownElements.filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Third';
            });
        }).first().click();
    };

    this.JobId_getOptionsDisplayedInOpenedDropList = function () {};

    this.jobId_selectOptionInOpenedDropList = function(job) {};

    this.jobId_setDefaultValue= function() {};

    this.jobId_getCurrentSelectedOption = function() {};
        //Methods for the 'Location' drop-down menu
    this.location_clickOnDropDownMenu = function() {
        return location.click()
            .then(() => browser.wait(EC.visibilityOf(locationDropDownElement), 5000, 'Element is not visible'));
    };

    this.location_selectOptionInOpenedDropList = function(option) {
        return location.click();
        // if (element is in DOM)  {
        //     if (element.isVisible) {
        //     click
        // } else {
        //     scroll down & click
        // } else {
        //     console.log('Element is not in DOM');
        // }
    };

    this.location_setDefaultValue = function() {};

    this.location_getCurrentSelectedOption = function() {
        return this.location.getAttribute('value');
    };

    this.location_getAllAvailableOptions = function() {
        let locationsArray = [];
        return locationDropDownElements
            .then(items => {
                for (let i = 0; i < items.length; i++) {
                    items[i].getText()
                        .then(text => (text !== '') ? locationsArray.push(text) : text);
                }
            })
            .then(() => locationsArray);
    };
        //Methods for the 'Skills' drop-down menu
    this.skills_clickOnDropDownMenu = function() {
        return skills.click()
            .then(() => browser.wait(EC.visibilityOf(skillsDropDownElement), 5000, 'Element is not visible'));
    };

    this.skills_getAllAvailableOptions = function() {
        let skillsArray = [];
        return skillsDropDownElements
            .then(items => {
                for (let i = 0; i < items.length; i++) {
                    items[i].getText()
                        .then(text => skillsArray.push(text));
                }
            })
            .then(() => skillsArray);
    };

    this.skills_selectOptionInOpenedDropList = function() {};

    this.skills_deselectOptionInOpenedDropList = function() {};

    this.skills_getCurrentSelectedOption = function() {};
        //Method for the 'Find' button
    this.clickFindButton = function () {   
        return browser.wait(EC.visibilityOf(findButton), 5000, 'Element is not visible')
            .then(() => browser.wait(EC.elementToBeClickable(findButton), 5000, 'Element is not clickable'))
            .then(() => findButton.click());
    };
};

Career.prototype = BasePage;
module.exports = new Career();
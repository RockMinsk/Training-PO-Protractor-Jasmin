const { browser, by, element, protractor } = require('protractor');

const BasePage = require('./basePage.js');
const EC = protractor.ExpectedConditions;

const jobId = element(by.css('.job-search__input'));
const jobIdDropDownElement = element(by.css('.autocomplete-suggestions'));
const jobIdDropDownElements = element.all(by.css('.autocomplete-suggestions'));
const location = element(by.css('.selection'));
const locationDropDownElement = element(by.css('.select-box-results'));
const locationDropDownElements = element.all(by.css('.optgroup'));
const skills = element(by.css('.multi-select-filter'));
const skillsDropDownElement = element(by.css('.multi-select-dropdown'));
const skillsDropDownElements = element.all(by.css('.multi-select-dropdown li span'));
const findButton = element(by.xpath('//button[@class="job-search__submit"]'));

// module.exports = 
class Career extends BasePage {
    constructor(url){
        super(url);
        this.url = url || 'https://www.epam.com/careers';
    }

    get() { 
        browser.get(this.url);
    };

    currentUrl() {
        return this.url;
    };

    // Search Form methods
        //Methods for the 'Keyword or Job ID' input field
    jobId_typeTextInInputField(keyword) {
        return jobId.sendKeys(keyword)
            .then(() => browser.wait(EC.visibilityOf(jobIdDropDownElement), 5000, 'Element is not visible'));
    };

    JobId_getAllAvailableOptions() {
        let jobIdArray = [];
        return jobIdDropDownElements
            .then(items => {
                for (let i = 0; i < items.length; i++) {
                    items[i].getText()
                        .then(text => (text !== '') ? jobIdArray.push(text) : text);
                }
            })
            .then(() => jobIdArray);
    };

    JobId_getOptionsDisplayedInOpenedDropList() {
        //TODO:
    };

    jobId_selectOptionInOpenedDropList(job) {
        const jobSelectedFromList = element(by.css('.autocomplete-suggestion[data-index = "0"]'));
        //TODO:
        return jobSelectedFromList.click();
    };

    jobId_setDefaultValue() {
        return jobId.clear()
            .then(() => expect(jobId.getAttribute('value')).toEqual(''));
    };

    jobId_getCurrentSelectedOption() {
        return jobId.getAttribute('value');
    };

        //Methods for the 'Location' drop-down menu
    location_clickOnDropDownMenu() {
        return location.click()
            .then(() => browser.wait(EC.visibilityOf(locationDropDownElement), 5000, 'Element is not visible'));
    };

    location_selectOptionInOpenedDropList(country, city) {
        const necessaryLocation = element(by.css(`.select-box-results li[aria-label="${country}"`));
        const necessaryCity = element(by.css(`.select-box-results li[aria-label="${country}"] .open li[id$="${city}"]`))
        const selectedCity = element(by.xpath(`//div[@class='rendered'][contains(text(), "${city}")]`));
        // perform scroll to necessary country:
        return necessaryLocation.getLocation( (location) => {
            browser.executeScript(`window.scrollTo(${location.x}, ${location.y},);`);
        })
        // wait for the option to be visible:
        .then(() => browser.wait(EC.visibilityOf(necessaryLocation), 5000, 'Element is not visible'))
        // click on the selected country:
        .then(() => necessaryLocation.click())
        // perform scroll to the necessary city:
        .then(() => necessaryCity.getLocation( (location) => {
            browser.executeScript(`window.scrollTo(${location.x}, ${location.y},);`);
        }))
        // wait for the option to be visible:
        .then(() => browser.wait(EC.visibilityOf(necessaryCity), 5000, 'Element is not clickable'))
        .then(() => browser.sleep(100))
        // click on the selected city:
        .then(() => necessaryCity.click())
        .then(() => browser.wait(EC.visibilityOf(selectedCity), 5000, 'Element is not visible'));
    };

    location_setDefaultValue() {
        const allLocationsOption = element(by.css('.select-box-results li[id$="all_locations"]'));
        const defaulValue = element(by.xpath('//div[@class="rendered"][contains(text(), "All Locations")]'));

        return location.click()
        .then(() => allLocationsOption.getLocation( (location) => {
            browser.executeScript(`window.scrollTo(${location.x}, ${location.y},);`);
        }))
        .then(() => browser.wait(EC.visibilityOf(allLocationsOption), 5000, 'Element is not clickable'))
        .then(() => browser.sleep(100))
        .then(() => allLocationsOption.click())
        .then(() => browser.wait(EC.visibilityOf(defaulValue), 5000, 'Element is not clickable'));
    };

    location_getCurrentSelectedOption() {
        return this.location.getText()
            .then(text => console.log(text));
    };

    location_getAllAvailableOptions() {
        let locationsArray = [];
        return locationDropDownElements
            .then(items => {
                for (let i = 0; i < items.length; i++) {
                    items[i].getText()
                        .then(text => (text !== '') ? locationsArray.push(text) : text)
                        .then(() => {
                            if (i === items.length - 1) { 
                                return locationsArray;
                            }
                        });
                }
            })
    };

    location_getAllCitiesOfCountry(country) {
        const cities = element.all(by.css(`.option[aria-label="${country}"] .option`))
        const necessaryLocation = element(by.css(`.select-box-results li[aria-label="${country}"`));
        let citiesArray = [];

        return necessaryLocation.getLocation( (location) => {
            browser.executeScript(`window.scrollTo(${location.x}, ${location.y},);`);
        })
        .then(() => browser.wait(EC.visibilityOf(necessaryLocation), 5000, 'Element is not visible'))
        .then(() => browser.sleep(3000))
        .then(() => necessaryLocation.click())
        .then(() => cities
            .then(items => {
                for (let i = 0; i < items.length; i++) {
                    items[i].getText()
                        .then(text => (text !== '') ? citiesArray.push(text) : text)
                        .then(() => {
                            if (i === items.length - 1) { 
                                return citiesArray;
                            }
                        });
                }
            })
        )
    };
        //Methods for the 'Skills' drop-down menu
    skills_clickOnDropDownMenu() {
        return skills.click()
            .then(() => browser.wait(EC.visibilityOf(skillsDropDownElement), 5000, 'Element is not visible'));
    };

    skills_getAllAvailableOptions() {
        debugger;
        let skillsArray = [];
        return skillsDropDownElements
            .then(items => {
                for (let i = 0; i < items.length; i++) {
                    items[i].getText()
                        .then(text => (text !== '') ? skillsArray.push(text) : text)
                        .then(() => {
                            if (i === items.length - 1) { 
                                return skillsArray;
                            }
                        });
                };
            })
    };

    skills_selectOptionInOpenedDropList() {
        //TODO:
    };

    skills_deselectOptionInOpenedDropList() {
        //TODO:
    };

    skills_getCurrentSelectedOption() {
        //TODO:
    };
        //Method for the 'Find' button
    clickFindButton() {   
        return browser.wait(EC.visibilityOf(findButton), 5000, 'Element is not visible')
            .then(() => browser.wait(EC.elementToBeClickable(findButton), 5000, 'Element is not clickable'))
            .then(() => findButton.click());
    };
};

module.exports = Career;
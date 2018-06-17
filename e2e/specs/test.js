const { browser, protractor } = require('protractor');

let career = require('../support/page_objects/career.js');
let job = require('../support/page_objects/job.js')
// let searchForm = require('./po/component/searchForm.js');
let EC = protractor.ExpectedConditions;

describe("Test", function() {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        career.get();
    });

    it("should open the 'Job' page after click on the 'Find' button", () => {
        // console.log(career.currentUrl());
        return career.clickFindButton()
            .then(() => console.log(career.currentUrl() + '----------'))
            .then(() => career.skills_clickOnDropDownMenu())
            // .then(() => career.skills_getAllAvailableOptions())
            .then(() => career.location_clickOnDropDownMenu())
            .then(() => career.location_getAllAvailableOptions())
            .then(() => browser.sleep(2000))
            .then(() => browser.wait(EC.urlContains(job.currentUrl())))
            .then(() => console.log(job.currentUrl() + '-----------------------------------------------------'));
    });

    xit("just test"), () => {
        career.skills_clickOnDropDownMenu();
        browser.sleep(2000);
        career.skills_getAllAvailableOptions();
        console.log(career.skills_getAllAvailableOptions())
        // console.log(career.location_getAllAvailableOptions()[0] + '+++++++++');
    }

    xit("get array of skills"), () => {
        return career.clickFindButton()
            .then(() => browser.sleep(2000))
            .then(() => console.log(career.skills_getAllAvailableOptions()));
    }

    xit("should open search list by type some keyword in the 'Job ID' field", function() {
        // console.log(career.currentUrl());
        //career.typeKeyword('Test');
        career.location_clickOnDropDownMenu();
        career.location_getAllAvailableOptions();
        browser.sleep(3000);
        // console.log(job.currentUrl());
    });
});
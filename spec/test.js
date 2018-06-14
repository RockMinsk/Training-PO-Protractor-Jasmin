let career = require('./po/career.js');
let job = require('./po/job.js')
// let searchForm = require('./po/component/searchForm.js');
let EC = protractor.ExpectedConditions;

describe("Test", function() {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        career.get();
    })

    it("should open the 'Job' page after click on the 'Find' button", function() {
            // console.log(career.currentUrl());
            career.clickFindButton();
            // console.log(job.currentUrl());
            browser.wait(EC.urlContains(job.currentUrl()));
    });

    it("should open search list by type some keyword in the 'Job ID' field", function() {
        // console.log(career.currentUrl());
        career.typeKeyword('Test');
        browser.sleep(3000);
        // console.log(job.currentUrl());
});
});
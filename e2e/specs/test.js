//NOTE: this is JUST testing spec file

const { browser, protractor } = require('protractor');

let career = require('../support/page_objects/career.js');
let job = require('../support/page_objects/job.js');
let constant = require('../support/constants/constants.js')

describe("Testing the 'Job' page", function() {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        
    });

    beforeEach(() => {
        career.get();
    });

    describe("Testing the 'Job' page", () => {});

    it("test job page", async () =>{
        await career.clickFindButton();
        expect(browser.getCurrentUrl()).toEqual(constant.URL.JOB_PAGE);
        await job.location_clickOnDropDownMenu();
        await browser.sleep(3000);
    });

    xit("get current Job value", async () => {
        await career.jobId_typeTextInInputField('jav');
        await career.jobId_selectOptionInOpenedDropList();
        expect(career.jobId_getCurrentSelectedOption()).toEqual('Java (Full Stack) Developer');
    });

    xit("get array of skills"), async () => {
        await career.clickFindButton()
        await browser.sleep(2000)
        console.log(career.skills_getAllAvailableOptions());
    };

    xit("just test"), async  () => {
        await career.skills_clickOnDropDownMenu();
        await career.skills_getAllAvailableOptions();
    };
});
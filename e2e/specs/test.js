//NOTE: this is JUST testing spec file

const { browser } = require('protractor');

const Career = require('../support/page_objects/career.js');
const Job = require('../support/page_objects/job.js');
const constant = require('../support/constants/constants.js');

const career = new Career();
const job = new Job();

describe("Testing the 'Job' page", function() {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        
    });

    beforeEach(() => {
        career.get();
    });

    afterEach(() => {
        return browser.executeScript('window.sessionStorage.clear();') // clear session
            .then(() => browser.executeScript('window.localStorage.clear();')) // clear cache
    });

    describe("Testing the 'Job' page", () => {
        fit("get array of skills", async () => {
            await career.clickFindButton()
            await browser.sleep(2000)
            await job.skills_clickOnDropDownMenu();
            career.skills_getAllAvailableOptions();
        });

        xit("test job page", async () =>{
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
     
        xit("just test"), async  () => {
            await career.skills_clickOnDropDownMenu();
            await career.skills_getAllAvailableOptions();
        };
    });
});
const { browser, protractor } = require('protractor');

let career = require('../support/page_objects/career.js');
let constant = require('../support/constants/constants.js')

describe("Testing the 'Career' page", function() {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
    });

    beforeEach(() => {
        career.get();
    });

    it("should open the 'Career' page - url is correct", async () => {
        expect(browser.getCurrentUrl()).toEqual(constant.URL.CARRER_PAGE);
        // await career.skills_clickOnDropDownMenu();
        browser.sleep(2000);
        await career.location_clickOnDropDownMenu();
        await career.location_getAllCitiesOfCountry(constant.COUNTRY.HUNGARY);
    });

    it("should open the 'Job' page after click on the 'Find' button", () => {
        career.clickFindButton();
        expect(browser.getCurrentUrl()).toEqual(constant.URL.JOB_PAGE);
    });

    it("should open the 'Job' page after selection of some Job in the 'Keyword' input field", async () => {
        await career.jobId_typeTextInInputField('jav');
        await career.jobId_selectOptionInOpenedDropList();
        expect(browser.getCurrentUrl()).toEqual(constant.URL.CARRER_PAGE);
    });

    desribe("Testing of the Search Form", () => {

        describe("Testing the 'KeyWword or JobId' field", () => {});
            //TODO:
        it("should open search list by type some keyword in the 'Job ID' field", async () => {
            await career.jobId_typeTextInInputField('jav');
            await career.jobId_selectOptionInOpenedDropList();
            expect(career.jobId_getCurrentSelectedOption()).toEqual('Java (Full Stack) Developer');
        });

        it("user should be able to clear the 'Keyword or Job ID' field", async () => {
            await career.jobId_typeTextInInputField('jav');
            await career.jobId_selectOptionInOpenedDropList();
            await career.jobId_setDefaultValue();
        });
    

        describe("Testing the 'Location' field", () => {});
             //TODO:   
            it("user should be able to set location to default value", async () => {
            await career.location_clickOnDropDownMenu();
            await career.location_selectOptionInOpenedDropList('United States', 'Windsor, CT');
            await career.location_setDefaultValue();
        });
        
        describe("Testing the 'Skills' field", () => {});
            //TODO:
            it("", () => {});

        describe("Check filtering by selected options", () => {});
            //TODO:
            it("", () => {});
    });
});
let career = require('../test/po/career.js')

describe("Test", function() {

    it("should open the 'Job' page after click on the 'Find' button", function() {
        career.get();
        career.clickFindButton();
    });
});
let Career = require('./career.js');

let Job = function() {
    // Career.apply(this, arguments);

    this.url = 'https://www.epam.com/careers/job-listings';
    const relocationCheckBox = element(by.css('.job-search__filter-label'));
    const searchResultHeader = element(by.css('.search-result__header'));
    const sortingMenu = element(by.css('.search-result__sorting-menu'));
    const sortingRelevance = element(by.css('.search-result__sorting-item search-result__sorting-item--active'));
    const sortingDate = element(by.css('.search-result__sorting-item'));
    const searchResultList = element(by.css('.search-result__list'));
    const searchResultItem = element(by.css('.search-result__item'));
    const searchResultItems = element(by.xpath('//*[@class="search-result__list"]/child::*[@class="search-result__item"]'));
    const applyButton = element(by.css('.search-result__item-apply'));
    const shareButton = element(by.css('.search-result__share-button'));
    // The 'Relocation Help' check-box
    this.relocation_tickCheckBox = function() {
        return relocationCheckBox.click();
    };

    this.relocation_untickCheckBox = function() {};

    this.checkIfAllJobsInListContainRelocationOption = function() {};
    // Search Results header:
    this.getSearchResultsHeader = function() {};

    this.checkIfSelectedJobIdPresentInHeader = function(getSearchResultsHeader) {};
    // Sort By:
    this.sorting_clickOnRelevanceOption = function() {
        return sortingRelevance.click();
    };

    this.sorting_clickOnDateOption = function() {
        return sortingDate.click();
    };

    this.sorting_isJobsOrderedByDate = function() {};

    this.sorting_isJobsOrderedByRelevance = function() {};
    //Search Results:
    this.clickOnApplyButton = function() {
        return applyButton.click();
    };

    this.clickOnShareButton = function() {
        return shareButton.click();
    };

    this.isCorrectLocationForAllFindJobs = function() {};

    this.isCorrectJobNameForAllFindJobs = function() {};
};

Job.prototype = Career;
module.exports = new Job();
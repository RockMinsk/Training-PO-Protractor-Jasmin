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
    relocation_tickCheckBox = () => {
        return relocationCheckBox.click();
    };

    relocation_untickCheckBox = () => {
        //TODO:
    };

    checkIfAllJobsInListContainRelocationOption = () => {
        //TODO:
    };
    // Search Results header:
    getSearchResultsHeader = () => {
        //TODO:
    };

    checkIfSelectedJobIdPresentInHeader = getSearchResultsHeader => {
        //TODO:
    };
    // Sort By:
    sorting_clickOnRelevanceOption = () => {
        return sortingRelevance.click();
    };

    sorting_clickOnDateOption = () => {
        return sortingDate.click();
    };

    this.sorting_isJobsOrderedByDate = () => {
        //TODO:
    };

    this.sorting_isJobsOrderedByRelevance = () => {
        //TODO:
    };
    //Search Results:
    this.clickOnApplyButton = () => {
        return applyButton.click();
    };

    this.clickOnShareButton = () => {
        return shareButton.click();
    };

    this.isCorrectLocationForAllFindedJobs = () => {
        //TODO:
    };

    this.isCorrectJobNameForAllFindedJobs = () => {
        //TODO:
    };
};

Job.prototype = Career;
module.exports = new Job();
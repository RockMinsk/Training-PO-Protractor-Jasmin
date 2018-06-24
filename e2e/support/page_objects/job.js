let Career = require('./career.js');

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

// module.exports = 
class Job extends Career {
    constructor(url){
        super(url);
        this.url = url || 'https://www.epam.com/careers/job-listings';
    }
    // The 'Relocation Help' check-box
    relocation_tickCheckBox() {
        return relocationCheckBox.click();
    };

    relocation_untickCheckBox() {
        //TODO:
    };

    checkIfAllJobsInListContainRelocationOption() {
        //TODO:
    };
    // Search Results header:
    getSearchResultsHeader() {
        //TODO:
    };

    checkIfSelectedJobIdPresentInHeader(getSearchResultsHeader) {
        //TODO:
    };
    // Sort By:
    sorting_clickOnRelevanceOption() {
        return sortingRelevance.click();
    };

    sorting_clickOnDateOption() {
        return sortingDate.click();
    };

    sorting_isJobsOrderedByDate() {
        //TODO:
    };

    sorting_isJobsOrderedByRelevance() {
        //TODO:
    };
    //Search Results:
    clickOnApplyButton() {
        return applyButton.click();
    };

    clickOnShareButton() {
        return shareButton.click();
    };

    isCorrectLocationForAllFindedJobs() {
        //TODO:
    };

    isCorrectJobNameForAllFindedJobs() {
        //TODO:
    };
};

module.exports = Job;
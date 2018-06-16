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
    
    this.performFilterByRelocation = function() {
        return relocationCheckBox.click();
    }
    
    this.sortingByRelevance = function() {
        return sortingRelevance.click();
    }

    this.sortingByDate = function() {
        return sortingDate.click();
    }

    this.applyJob = function() {
        return applyButton.click();
    }

    this.shareJob = function() {
        return shareButton.click();
    }
}

Job.prototype = Career;
module.exports = new Job();
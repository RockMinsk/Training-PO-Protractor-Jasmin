let Career = require('./career.js');

let Job = function() {
    this.url = 'https://www.epam.com/careers/job-listings';
    this.relocationCheckBox = element(by.id('relocation'));
    this.searchResultHeader = element(by.class('search-result__header'));
    this.sortingMenu = element(by.class('search-result__sorting-menu'));
    this.sortingRelevance = element(by.class('search-result__sorting-item search-result__sorting-item--active'));
    this.sortingDate = element(by.class('search-result__sorting-item'));
    this.searchResultList = element(by.class('search-result__list'));
    this.searchResultItem = element(by.class('search-result__item'));
    this.searchResultItems = element(by.xpath('//*[@class="search-result__list"]/child::*[@class="search-result__item"]'));
    this.applyButton = element(by.class('search-result__item-apply'));
    this.shareButton - element(by.class('search-result__share-button'));

    this.performFilterByRelocation = function() {
        let self = this;
        return self.relocationCheckBox.click();
    }
    
    this.sortingByRelevance = function() {
        let self = this;
        return self.sortingRelevance.click();
    }

    this.sortingByDate = function() {
        let self = this;
        return self.sortingDate.click();
    }

    this.applyJob = function() {
        let self = this;
        return self.applyButton.click();
    }

    this.shareJob = function() {
        let self = this;
        return self.shareButton.click();
    }
}

Job.prototype = Career;
module.exports = new Job();
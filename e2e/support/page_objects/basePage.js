class BasePage {
    constructor(url) {
        this.url = url;
    }
    visit() {
        return browser.get(this.url);
    }
}

module.exports = BasePage;
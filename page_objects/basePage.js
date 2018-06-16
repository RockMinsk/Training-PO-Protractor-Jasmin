let BasePage = function() {
    this.visit = function() {
        return browser.get(this.url);
    }
}

module.export = new BasePage();
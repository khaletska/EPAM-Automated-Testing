const Page = require('./page');

class PastePage extends Page {

    get pasteTextHighlight() {
        return $("/html/body/article/div/div[1]");
    }

    get pasteText() {
        return $("/html/body/article/pre");
    }

    async checkTitle(title) {
        await expect(browser).toHaveTitleContaining(title);
    }

    async checkHighlight(highlightValue) {
        await expect(this.pasteTextHighlight).toHaveTextContaining(highlightValue);
    }

    async checkPasteText(text) {
        await expect(this.pasteText).toHaveTextContaining(text);
    }
}

module.exports = new PastePage();

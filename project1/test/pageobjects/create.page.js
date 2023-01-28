const Page = require('./page');

class CreatePage extends Page {

    get pasteName () {
        return $("/html/body/article/form/div[1]/div[1]/input");
    }

    get pasteText () {
        return $("/html/body/article/form/div[2]/textarea[2]");
    }

    get pasteHilightDropDown() {
        return $("/html/body/article/form/div[3]/div[1]/select");
    }

    get pasteExpirationDropDown () {
        return $("/html/body/article/form/div[5]/select");
    }

    get createNewPasteBtn () {
        return $("/html/body/article/form/div[6]/div[1]/button");
    }

    async setPasteName(name) {
        await this.pasteName.setValue(name);
    }

    async setPasteText(text) {
        await this.pasteText.setValue(text);
    }

    async setHilightByAttr(attr, value) {
        await this.pasteHilightDropDown.selectByAttribute(attr,value);
    }

    async setExpirationByAttr(attr, value) {
        await this.pasteExpirationDropDown.selectByAttribute(attr,value);
    }

    async createNewPaste() {
        await this.createNewPasteBtn.click();
    }

    open () {
        return super.open("https://paste.lcomrade.su/");
    }

}

module.exports = new CreatePage();

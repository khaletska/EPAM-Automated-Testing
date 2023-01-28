const CreatePage = require('../pageobjects/create.page')
const PastePage = require('../pageobjects/paste.page')

describe('pastebin', () => {
    
    beforeEach(async () => {
        await CreatePage.open();
    });

    it('i can win', async () => {
        
        await CreatePage.setPasteName("helloweb");
        await CreatePage.setPasteText("Hello from WebDriver");
        await CreatePage.setExpirationByAttr("value","600");
        await CreatePage.createNewPaste();

    });

    it('bring it on', async () => {

        const pasteName = "how to gain dominance among developers";
        const pasteText = ["git config --global user.name \"New Sheriff in Town\"",
        "git reset $ (git commit-tree HEAD ^ {tree} -m \"Legacy code\"\)",
        "git push origin master --force"];
        const pasteHighlight = "Bash";

        await CreatePage.setPasteName(pasteName);
        await CreatePage.setPasteText(pasteText.join('\n'));
        await CreatePage.setHilightByAttr("value",pasteHighlight);
        await CreatePage.setExpirationByAttr("value","600");
        await CreatePage.createNewPaste();

        await browser.pause(4000);

        await PastePage.checkTitle(pasteName);
        for (str in pasteText) {
            await PastePage.checkPasteText(pasteText[str]);
        }
        await PastePage.checkHighlight(pasteHighlight);
        
    });

});
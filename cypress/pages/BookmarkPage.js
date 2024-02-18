const locators = require("./locators/locators")

class BookmarkPage {
    clickBookmarkBtn() {
        cy.xpath(locators.bookmarks).click();
        cy.wait(1000)
    }
    assertFirstNoteBookmark() {
       cy.xpath(locators.firstBookmarkNote).should('have.text', 'You bookmarked 49 CFR 385.1')
       cy.wait(500)
    }
}

module.exports = new BookmarkPage();
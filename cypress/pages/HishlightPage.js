const locators = require("./locators/locators")

class HighlightPage {
    clickHighlightBtn() {
        cy.xpath(locators.highlights).click();
        cy.wait(1000)
    }
    assertFirstHighlightText() {
       cy.xpath(locators.firstHighlightNote).should('have.text', 'You highlighted 49 CFR 40.1')
       cy.wait(500)
    }
}

module.exports = new HighlightPage();
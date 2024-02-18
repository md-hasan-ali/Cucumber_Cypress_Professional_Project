const locators = require("./locators/locators")

class NotesPage {
    clickNoteBtn() {
        cy.xpath(locators.notes).click();
        cy.wait(1000)
    }
    assertFirstNote() {
       cy.xpath(locators.first_note).should('have.text', 'You created a note for 49 CFR 40.1')
       cy.wait(500)
    }
}

module.exports = new NotesPage();
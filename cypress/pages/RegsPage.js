const locators = require("./locators/locators")

// Regs page methods
class RegsPage {
    // Login Methods
    loginFeature() {
        cy.xpath(locators.login).click()
        cy.wait(1000)
    }
    login() {
        cy.xpath(locators.userEmailInput).type("")
        cy.wait(500)
        cy.xpath(locators.passwordInput).type("")
        cy.xpath(locators.loginButton).click()
        cy.wait(1000)
    }
    clickRegsBtn() {
        cy.xpath(locators.regBook).click();
        cy.wait(1000)
        cy.url().should('include', '/390.5T')
    }
    click_49_CFR_390_5T() {
        cy.xpath(locators.cfr_button).click();
        cy.wait(1000)
    }
    click_part_40_and_subPart_A() {
        cy.xpath(locators.part_40).click();
        cy.wait(500)
        cy.xpath(locators.subpart_A).click();
        cy.wait(500)
    }
    click_regulation_cover() {
        cy.xpath(locators.regulation_cover_40_1).click();
        cy.wait(500)
        cy.url().should('include', '/40.1')
        cy.wait(1000)
    }
    click_next_regulation_arrow() {
        cy.xpath(locators.nextArrow).click();
        cy.wait(1000)
        cy.url().should('include', '/40.3')
        cy.wait(1000)
    }
    click_previous_regulation_arrow() {
        cy.xpath(locators.previousArrow).click();
        cy.wait(1000)
        cy.url().should('include', '/40.1')
        cy.wait(1000)
    }

}
module.exports = new RegsPage()



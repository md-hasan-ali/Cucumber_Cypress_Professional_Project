// All web elements 
class Locators {

    // login locators 
    login = "//a[normalize-space()='Login']"
    userEmailInput = "//input[@placeholder='Email']"
    passwordInput = "//input[@placeholder='Password']"
    loginButton = "//button[normalize-space()='Login']"

    // Regs Page 
    regBook = "//img[@alt='menubook']"
    cfr_button = '//*[@id="headlessui-menu-button-:r1:"]/h2'
    part_40 = "//p[contains(text(),'Part 40—Procedures for Transportation Workplace Dr')]"
    subpart_A = '//p[text()="Subpart A—Administrative Provisions"]'
    regulation_cover_40_1 = '//p[text()="§ 40.1 Who does this regulation cover?"]'

    // Notes Page 
    notes = "(//a[normalize-space()='Notes'])[1]"
    first_note = "(//*[contains(text(),'You created a note for 49 CFR')])[1]"

    // Bookmarks Page 
    bookmarks = "(//a[normalize-space()='Bookmarks'])[1]"
    firstBookmarkNote = "(//*[contains(text(),'You bookmarked 49 CFR')])[1]"

    // Highlights Page  
    highlights = "(//a[normalize-space()='Highlights'])[1]"
    firstHighlightNote = "(//*[contains(text(),'You highlighted 49 CFR')])[1]"



}

module.exports = new Locators();
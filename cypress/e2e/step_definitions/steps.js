import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const regulationPage = require("../../pages/RegsPage")
const notePage = require("../../pages/NotesPage")
const bookmarkPage = require("../../pages/BookmarkPage")
const highlightPage = require("../../pages/HishlightPage")

// eRegs page Login
Given("User open the eRegs page", function () {
  cy.visit("/")
});
When("Click on the login feature", () => {
  regulationPage.loginFeature()
})
When("Login to the eRegs website", () => {
  regulationPage.login()
})

// eRegs page automation
Then("Click on the regs button and assert url", () => {
  regulationPage.clickRegsBtn()
})
Then("Click on the '49_CFR_390_5T' button", () => {
  regulationPage.click_49_CFR_390_5T()
})
Then("Click on the 'part_40_and_subPart_A' option", () => {
  regulationPage.click_part_40_and_subPart_A()
})
Then("Click on the 'regulation_cover' and assert endpoint and question", () => {
  regulationPage.click_regulation_cover()
})
Then("Click on the 'next regulation arrow' and assert title and url", () => {
  regulationPage.click_next_regulation_arrow()
})
Then("Click on the 'previous regulation arrow' and assert title and url", () => {
  regulationPage.click_previous_regulation_arrow()
})

// Notes page automation 
Then("Click on the 'Notes' button", () => {
  notePage.clickNoteBtn()
})
Then("Assert the first notes", () => {
  notePage.assertFirstNote()
})

// Notes page automation 
Then("Click on the 'Bookmarks' button", () => {
  bookmarkPage.clickBookmarkBtn()
})
Then("Assert the first notes of bookmark page", () => {
  bookmarkPage.assertFirstNoteBookmark()
})

// Hightlights page automation 
Then("Click on the 'Hightlights' button", () => {
  highlightPage.clickHighlightBtn()
})
Then("Assert the first text of highlight page", () => {
  highlightPage.assertFirstHighlightText()
})



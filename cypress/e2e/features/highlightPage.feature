Feature: Automate the eRegs Page

    Background:
        Given User open the eRegs page

    Scenario: Verify the Highlights page working properly
        When Click on the login feature
        And Login to the eRegs website
        And Click on the 'Hightlights' button
        Then Assert the first text of highlight page

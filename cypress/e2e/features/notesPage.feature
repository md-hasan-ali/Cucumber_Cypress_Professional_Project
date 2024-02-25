Feature: Automate the eRegs Page

    Background:
        Given User open the eRegs page

    Scenario: Verify the Notes page working properly
        When Click on the login feature
        And Login to the eRegs website
        And Click on the 'Notes' button
        Then Assert the first notes
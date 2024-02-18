Feature: Automate the eRegs Page

    Background:
        Given User open the eRegs page

    Scenario: Verify the eRegs page working properly
        When Click on the login feature
        And Login to the eRegs website
        And Click on the regs button and assert url
        And Click on the '49_CFR_390_5T' button
        And Click on the 'part_40_and_subPart_A' option
        And Click on the 'regulation_cover' and assert endpoint and question
        And Click on the 'next regulation arrow' and assert title and url
        Then Click on the 'previous regulation arrow' and assert title and url

    Scenario: Verify the Notes page working properly
        When Click on the login feature
        And Login to the eRegs website
        And Click on the 'Notes' button
        Then Assert the first notes

    Scenario: Verify the Bookmark page working properly
        When Click on the login feature
        And Login to the eRegs website
        And Click on the 'Bookmarks' button
        Then Assert the first notes of bookmark page

    Scenario: Verify the Highlights page working properly
        When Click on the login feature
        And Login to the eRegs website
        And Click on the 'Hightlights' button
        Then Assert the first text of highlight page

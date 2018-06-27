Feature: SelectingItems
  This feature deals with adding an item to the basket
  Scenario: Add an item to the basket
    Given I am on the homepage
    And I click the sign-in button
    And I enter the following details for login
      | email                | password     | username     |
      | Testing@testmail.com | TestPassword | Test Testing |
    And I click the login button
    And I click the dresses tab
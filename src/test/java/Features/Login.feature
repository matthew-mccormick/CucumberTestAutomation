Feature: LoginFeature
  This feature deals with the login functionality

  Scenario: Login with correct username and password
    Given I am on the homepage
    And I click the sign-in button
    And I enter the following details for login
      | email                | password     | username     |
      | Testing@testmail.com | TestPassword | Test Testing |
    And I click the login button
    Then I am directed the homepage for the user

  Scenario: Login with incorrect username and password
    Given I am on the homepage
    And I click the sign-in button
    And I enter the following details for login
      | email                              | password       | username       |
      | AUnregistereduser@unregistered.com | Non-Registered | Not Registered |
    And I click the login button
    Then A login validation message is displayed

  Scenario: Enter an incorrectly formatted email address
    Given I am on the homepage
    And I click the sign-in button
    And I enter the following details for login
      | email                 | password       | username       |
      | wrongformattedemailat | Non-valid | Not Valid |
    Then An inline error message is displayed
    And I click the login button
    Then A login validation message is displayed
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8205450272,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click the sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the following details for login",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "username"
      ],
      "line": 8
    },
    {
      "cells": [
        "Testing@testmail.com",
        "TestPassword",
        "Test Testing"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am directed the homepage for the user",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 247365531,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickTheSignInButton()"
});
formatter.result({
  "duration": 1140312493,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterTheFollowingDetailsForLogin(DataTable)"
});
formatter.result({
  "duration": 385373629,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickTheLoginButton()"
});
formatter.result({
  "duration": 1276773926,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iAmDirectedTheHomepageForTheUser()"
});
formatter.result({
  "duration": 85646618,
  "status": "passed"
});
formatter.after({
  "duration": 262843654,
  "status": "passed"
});
formatter.before({
  "duration": 7138683259,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login with incorrect username and password",
  "description": "",
  "id": "loginfeature;login-with-incorrect-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click the sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter the following details for login",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "username"
      ],
      "line": 17
    },
    {
      "cells": [
        "AUnregistereduser@unregistered.com",
        "Non-Registered",
        "Not Registered"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "A login validation message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 48531358,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickTheSignInButton()"
});
formatter.result({
  "duration": 1469338864,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterTheFollowingDetailsForLogin(DataTable)"
});
formatter.result({
  "duration": 535917037,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickTheLoginButton()"
});
formatter.result({
  "duration": 894333629,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.aLoginValidationMessageIsDisplayed()"
});
formatter.result({
  "duration": 84261136,
  "status": "passed"
});
formatter.after({
  "duration": 265406024,
  "status": "passed"
});
formatter.before({
  "duration": 7224878617,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Enter an incorrectly formatted email address",
  "description": "",
  "id": "loginfeature;enter-an-incorrectly-formatted-email-address",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click the sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter the following details for login",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "username"
      ],
      "line": 26
    },
    {
      "cells": [
        "wrongformattedemailat",
        "Non-valid",
        "Not Valid"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "An inline error message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "A login validation message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 75937975,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickTheSignInButton()"
});
formatter.result({
  "duration": 1327680000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterTheFollowingDetailsForLogin(DataTable)"
});
formatter.result({
  "duration": 350137284,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.anInlineErrorMessageIsDisplayed()"
});
formatter.result({
  "duration": 56176593,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickTheLoginButton()"
});
formatter.result({
  "duration": 1052846617,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.aLoginValidationMessageIsDisplayed()"
});
formatter.result({
  "duration": 70561976,
  "status": "passed"
});
formatter.after({
  "duration": 206836938,
  "status": "passed"
});
formatter.uri("SelectingItems.feature");
formatter.feature({
  "line": 1,
  "name": "SelectingItems",
  "description": "This feature deals with adding an item to the basket",
  "id": "selectingitems",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7335893333,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Add an item to the basket",
  "description": "",
  "id": "selectingitems;add-an-item-to-the-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click the sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter the following details for login",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "username"
      ],
      "line": 7
    },
    {
      "cells": [
        "Testing@testmail.com",
        "TestPassword",
        "Test Testing"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the dresses tab",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 69483457,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickTheSignInButton()"
});
formatter.result({
  "duration": 1487437037,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterTheFollowingDetailsForLogin(DataTable)"
});
formatter.result({
  "duration": 404512000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickTheLoginButton()"
});
formatter.result({
  "duration": 1161411555,
  "status": "passed"
});
formatter.match({
  "location": "ItemSteps.iClickTheDressesTab()"
});
formatter.result({
  "duration": 1775408,
  "status": "passed"
});
formatter.after({
  "duration": 262317827,
  "status": "passed"
});
});
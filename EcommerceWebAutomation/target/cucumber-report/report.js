$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 8062603300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify valid user login",
  "description": "",
  "id": "login-functionality;verify-valid-user-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Homepage of the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify user on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User logs in with \"abcdtest@test.com\" and \"Abcdabcd\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify successful login",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 156070400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyUserIsonLoginPage()"
});
formatter.result({
  "duration": 2187670100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.verify_user_on_login_page()"
});
formatter.result({
  "duration": 55211500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdtest@test.com",
      "offset": 19
    },
    {
      "val": "Abcdabcd",
      "offset": 43
    }
  ],
  "location": "LoginPageSteps.user_logs_in_with_and(String,String)"
});
formatter.result({
  "duration": 2621697800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifySuccessfulUserlogin()"
});
formatter.result({
  "duration": 25183100,
  "status": "passed"
});
formatter.after({
  "duration": 651024500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Verify Invalid user login",
  "description": "",
  "id": "login-functionality;verify-invalid-user-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on Homepage of the application",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Verify user on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User logs in with \"\u003cemailId\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify error message for invalid credentials",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-invalid-user-login;",
  "rows": [
    {
      "cells": [
        "emailId",
        "password"
      ],
      "line": 22,
      "id": "login-functionality;verify-invalid-user-login;;1"
    },
    {
      "cells": [
        "abcdtest@test.com",
        "Test0001"
      ],
      "line": 23,
      "id": "login-functionality;verify-invalid-user-login;;2"
    },
    {
      "cells": [
        "abc@xyz.com",
        "Abcdabcd"
      ],
      "line": 24,
      "id": "login-functionality;verify-invalid-user-login;;3"
    },
    {
      "cells": [
        "abc@xab.com",
        "test111"
      ],
      "line": 25,
      "id": "login-functionality;verify-invalid-user-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7417289700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify Invalid user login",
  "description": "",
  "id": "login-functionality;verify-invalid-user-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 12,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on Homepage of the application",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Verify user on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User logs in with \"abcdtest@test.com\" and \"Test0001\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify error message for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 5170500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyUserIsonLoginPage()"
});
formatter.result({
  "duration": 2069275500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.verify_user_on_login_page()"
});
formatter.result({
  "duration": 57142900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdtest@test.com",
      "offset": 19
    },
    {
      "val": "Test0001",
      "offset": 43
    }
  ],
  "location": "LoginPageSteps.user_logs_in_with_and(String,String)"
});
formatter.result({
  "duration": 1507592800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.verifyErrorMessage()"
});
formatter.result({
  "duration": 36213400,
  "status": "passed"
});
formatter.after({
  "duration": 640209600,
  "status": "passed"
});
formatter.before({
  "duration": 6954961100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify Invalid user login",
  "description": "",
  "id": "login-functionality;verify-invalid-user-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 12,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on Homepage of the application",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Verify user on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User logs in with \"abc@xyz.com\" and \"Abcdabcd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify error message for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 4449800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyUserIsonLoginPage()"
});
formatter.result({
  "duration": 3599231500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.verify_user_on_login_page()"
});
formatter.result({
  "duration": 52252500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@xyz.com",
      "offset": 19
    },
    {
      "val": "Abcdabcd",
      "offset": 37
    }
  ],
  "location": "LoginPageSteps.user_logs_in_with_and(String,String)"
});
formatter.result({
  "duration": 1531340100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.verifyErrorMessage()"
});
formatter.result({
  "duration": 66881700,
  "status": "passed"
});
formatter.after({
  "duration": 906408300,
  "status": "passed"
});
formatter.before({
  "duration": 7566701400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify Invalid user login",
  "description": "",
  "id": "login-functionality;verify-invalid-user-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 12,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on Homepage of the application",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Verify user on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User logs in with \"abc@xab.com\" and \"test111\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify error message for invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 3786500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyUserIsonLoginPage()"
});
formatter.result({
  "duration": 2263352700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.verify_user_on_login_page()"
});
formatter.result({
  "duration": 50335300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@xab.com",
      "offset": 19
    },
    {
      "val": "test111",
      "offset": 37
    }
  ],
  "location": "LoginPageSteps.user_logs_in_with_and(String,String)"
});
formatter.result({
  "duration": 1348417500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.verifyErrorMessage()"
});
formatter.result({
  "duration": 68179200,
  "status": "passed"
});
formatter.after({
  "duration": 780456700,
  "status": "passed"
});
});
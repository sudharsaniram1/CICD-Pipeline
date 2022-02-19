$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/sample.feature");
formatter.feature({
  "name": "Ignitho Portal",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.scenarioOutline({
  "name": "login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user launches the ignitho URL",
  "keyword": "Given "
});
formatter.step({
  "name": "the user validates the home page",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks inquiry button",
  "keyword": "When "
});
formatter.step({
  "name": "the user validates the inquiry page",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter \"\u003cRequirement\u003e\",\"\u003cName\u003e\",\"\u003cCompany\u003e\" and \"\u003cEmailid\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Requirement",
        "Name",
        "Company",
        "Emailid"
      ]
    },
    {
      "cells": [
        "Testing",
        "Sudharsani",
        "ignitho",
        "sudharsani.r@ignitho.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user launches the ignitho URL",
  "keyword": "Given "
});
formatter.match({
  "location": "IgnithoPage.user_launches_the_ignitho_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validates the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "IgnithoPage.the_user_validates_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks inquiry button",
  "keyword": "When "
});
formatter.match({
  "location": "IgnithoPage.user_clicks_inquiry_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validates the inquiry page",
  "keyword": "Then "
});
formatter.match({
  "location": "IgnithoPage.the_user_validates_the_inquiry_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Testing\",\"Sudharsani\",\"ignitho\" and \"sudharsani.r@ignitho.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "IgnithoPage.user_enter_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
});
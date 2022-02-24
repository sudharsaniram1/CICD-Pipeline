$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/careers.feature");
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
  "name": "location",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@careerpage"
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
  "name": "user clicks careers page",
  "keyword": "When "
});
formatter.step({
  "name": "the user validates the careers page",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks open positions",
  "keyword": "And "
});
formatter.step({
  "name": "user select the location as \"\u003cLocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on apply button",
  "keyword": "And "
});
formatter.step({
  "name": "user enter the details as  \"\u003cFullName\u003e\",\"\u003cPhoneNo\u003e\",\"\u003cYrExp\u003e\" and \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Location",
        "FullName",
        "PhoneNo",
        "YrExp",
        "Email"
      ]
    },
    {
      "cells": [
        "India",
        "Niranjana",
        "9600011122",
        "7",
        "niranj@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "location",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    },
    {
      "name": "@careerpage"
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
  "name": "user clicks careers page",
  "keyword": "When "
});
formatter.match({
  "location": "careerspage.user_clicks_careers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validates the careers page",
  "keyword": "Then "
});
formatter.match({
  "location": "careerspage.the_user_validates_the_careers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks open positions",
  "keyword": "And "
});
formatter.match({
  "location": "careerspage.user_clicks_open_positions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the location as \"India\"",
  "keyword": "And "
});
formatter.match({
  "location": "careerspage.user_select_the_location_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on apply button",
  "keyword": "And "
});
formatter.match({
  "location": "careerspage.user_clicks_on_apply_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the details as  \"Niranjana\",\"9600011122\",\"7\" and \"niranj@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "careerspage.user_enter_the_details_as(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/Features/sample.feature");
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
formatter.scenario({
  "name": "login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    },
    {
      "name": "@homepage"
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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Data led, Cloud enabled, Digital Engineering Solutions | Ignitho Inc.]\u003e but was:\u003c[Ignitho Technologies]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinition.IgnithoPage.the_user_validates_the_home_page(IgnithoPage.java:23)\r\n\tat ✽.the user validates the home page(file:src/test/java/Features/sample.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks inquiry button",
  "keyword": "When "
});
formatter.match({
  "location": "IgnithoPage.user_clicks_inquiry_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user validates the inquiry page",
  "keyword": "Then "
});
formatter.match({
  "location": "IgnithoPage.the_user_validates_the_inquiry_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "Failure Screenshot");
formatter.after({
  "status": "passed"
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
formatter.after({
  "status": "passed"
});
});
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
});
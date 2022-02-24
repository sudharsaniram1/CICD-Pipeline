@sanity
Feature: Ignitho Portal

  @homepage
  Scenario: login with valid credentials
    Given user launches the ignitho URL
    Then the user validates the home page
    When user clicks inquiry button
    Then the user validates the inquiry page

  @login
  Scenario Outline: login with valid credentials
    #Given user launches the ignitho URL
    #Then the user validates the home page
    When user clicks inquiry button
    Then the user validates the inquiry page
    And user enter "<Requirement>","<Name>","<Company>" and "<Emailid>"

    Examples: 
      | Requirement | Name       | Company | Emailid                  |
      | Testing     | Sudharsani | ignitho | sudharsani.r@ignitho.com |
      


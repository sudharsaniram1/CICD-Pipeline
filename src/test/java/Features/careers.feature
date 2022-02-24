@sanity
Feature: Ignitho Portal

@careerpage

   Scenario Outline: location
    Given user launches the ignitho URL
    Then the user validates the home page
    When user clicks careers page
    Then the user validates the careers page
    And user clicks open positions 
    And user select the location as "<Location>" 
    And user clicks on apply button
    And user enter the details as  "<FullName>","<PhoneNo>","<YrExp>" and "<Email>" 
   
    Examples: 
    | Location | FullName | PhoneNo    |YrExp | Email          | 
    | India    | Niranjana| 9600011122 | 7    |niranj@gmail.com|
    
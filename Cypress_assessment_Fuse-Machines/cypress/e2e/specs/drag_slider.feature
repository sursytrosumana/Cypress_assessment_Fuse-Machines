Feature: Validate Lamdan-Playground
Validates multiple conditions in lambda Playground

Background: 
    Given User navigate to home page

Scenario: Validate chanding value for slider
    When User navigate to sliders page
    Then Slider has value as "15"
    When User move slider to "95"
    Then Slider has value as "95"

Scenario: Validate Input-Form submission
    When User navigate to input-form page
    And Change view to 'samsung-note9'
    And User fill input form
    Then Use successfully submit form
    
Scenario: Validate web accessibility
    When User accessibility of navigating to input-form page    
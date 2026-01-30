Feature: Example Test Scenario
  As a test automation engineer
  I want to validate basic functionality
  So that I can ensure the governance framework works correctly

  @smoke @governance
  Scenario: Validate framework structure
    Given the test automation framework is properly configured
    When I check the required directories
    Then all governance folders should exist
    And validation scripts should be executable

  @integration @approval-required
  Scenario: Validate test execution workflow
    Given I have a valid test scenario
    When I execute the test through the governance pipeline
    Then the test should run successfully
    And results should be captured in the reporting system
    And approval gates should be enforced for production deployments
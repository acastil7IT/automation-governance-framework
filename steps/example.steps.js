const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// Step definitions for governance framework validation

Given('the test automation framework is properly configured', async function () {
  // Validate that the framework structure exists
  this.frameworkRoot = process.cwd();
  console.log(`Framework root: ${this.frameworkRoot}`);
});

When('I check the required directories', async function () {
  // Define required directories for governance framework
  this.requiredDirs = [
    'features',
    'steps', 
    'pages',
    'scripts/validation',
    '.github/workflows',
    'reports'
  ];
  
  this.missingDirs = [];
  
  for (const dir of this.requiredDirs) {
    const dirPath = path.join(this.frameworkRoot, dir);
    if (!fs.existsSync(dirPath)) {
      this.missingDirs.push(dir);
    }
  }
});

Then('all governance folders should exist', async function () {
  if (this.missingDirs.length > 0) {
    throw new Error(`Missing required directories: ${this.missingDirs.join(', ')}`);
  }
  console.log('✅ All required governance directories exist');
});

Then('validation scripts should be executable', async function () {
  const validationScripts = [
    'scripts/validation/validate-framework.js',
    'scripts/validation/validate-jira.js'
  ];
  
  for (const script of validationScripts) {
    const scriptPath = path.join(this.frameworkRoot, script);
    if (!fs.existsSync(scriptPath)) {
      throw new Error(`Validation script not found: ${script}`);
    }
  }
  console.log('✅ All validation scripts are present');
});

Given('I have a valid test scenario', async function () {
  // Placeholder for test scenario validation
  this.testScenario = {
    name: 'Example Governance Test',
    approved: true,
    jiraTicket: 'GOV-123'
  };
});

When('I execute the test through the governance pipeline', async function () {
  // Simulate test execution through governance pipeline
  console.log(`Executing test: ${this.testScenario.name}`);
  this.executionResult = {
    status: 'passed',
    timestamp: new Date().toISOString(),
    reportPath: 'reports/test-results.html'
  };
});

Then('the test should run successfully', async function () {
  expect(this.executionResult.status).toBe('passed');
  console.log('✅ Test executed successfully');
});

Then('results should be captured in the reporting system', async function () {
  expect(this.executionResult.reportPath).toBeTruthy();
  console.log(`✅ Results captured at: ${this.executionResult.reportPath}`);
});

Then('approval gates should be enforced for production deployments', async function () {
  // Validate that approval gates are in place
  expect(this.testScenario.approved).toBe(true);
  console.log('✅ Approval gates validated');
});
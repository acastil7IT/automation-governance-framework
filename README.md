# Enterprise Test Automation Governance Framework

## Overview

This repository contains a comprehensive test automation governance framework designed for enterprise environments. The framework enforces quality gates, validation processes, and standardized reporting across development teams while maintaining simplicity and reliability.

## Architecture

The framework is built on Node.js with Playwright for browser automation and Cucumber for behavior-driven development. It focuses on governance, validation, and reporting rather than application-specific testing logic.

### Directory Structure

```
enterprise-test-automation-governance/
├── features/                   # Cucumber feature files (BDD scenarios)
├── steps/                     # Step definitions for Cucumber scenarios
├── pages/                     # Page Object Model implementations
├── scripts/validation/        # Governance validation scripts
├── .github/workflows/         # CI/CD pipeline definitions
├── reports/                   # Generated test reports and artifacts
└── package.json               # Project dependencies and scripts
```

## Prerequisites

- Node.js 18 or higher
- npm package manager
- Git version control
- GitHub repository with Actions enabled

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd enterprise-test-automation-governance
```

2. Install dependencies:
```bash
npm install
npx playwright install --with-deps
```

3. Verify installation:
```bash
npm run validate:framework
```

## Validation Framework

### Framework Structure Validation

The `validate-framework.js` script ensures all required directories exist:
- `features/` - Cucumber feature files
- `steps/` - Step definition implementations  
- `pages/` - Page object models

Usage:
```bash
npm run validate:framework
```

### Jira Integration Validation

The `validate-jira.js` script enforces ticket traceability by validating that Jira ticket keys exist in branch names or pull request titles.

Expected format: `ABC-123` (project key followed by ticket number)

Usage:
```bash
npm run validate:jira
```

## CI/CD Pipeline

### Pull Request Validation

Automatically triggered on pull requests to main or develop branches:

1. Installs project dependencies
2. Validates framework structure
3. Validates Jira ticket presence
4. Uploads validation results as artifacts

### Release Pipeline

Manual workflow dispatch with environment-specific approvals:

1. Requires manual approval for target environment
2. Runs comprehensive validation checks
3. Executes Playwright and Cucumber test suites
4. Generates HTML reports
5. Uploads test artifacts

## Configuration

### Environment Variables

Set the following environment variables for full functionality:

```bash
# Application under test
BASE_URL=https://your-application.com

# Jira integration (optional)
JIRA_API_TOKEN=your-jira-api-token
```

### GitHub Secrets

Configure these secrets in your repository settings:

- `JIRA_API_TOKEN` - Jira API authentication token
- Additional environment-specific secrets as needed

### GitHub Environments

Create the following environments in your repository:
- `staging` - For staging deployments
- `production` - For production deployments with required reviewers

## Test Execution

### Local Testing

Run framework validation:
```bash
npm run validate:framework
npm run validate:jira
```

Execute Playwright tests:
```bash
npm test
```

Execute Cucumber scenarios:
```bash
npm run test:cucumber
```

### CI/CD Testing

Tests are automatically executed through GitHub Actions workflows. Results are available in the Actions tab and as downloadable artifacts.

## Reporting

Test reports are generated in the `reports/` directory:

- **Playwright Reports**: Interactive HTML reports with test results
- **Cucumber Reports**: BDD scenario execution results
- **JSON Reports**: Machine-readable test data for integration

Reports are automatically uploaded as GitHub Actions artifacts and are not committed to version control.

## Development Workflow

### Branch Naming Convention

Include Jira ticket keys in branch names:
```
feature/ABC-123-implement-validation
bugfix/DEF-456-fix-reporting-issue
hotfix/GHI-789-security-patch
```

### Pull Request Process

1. Create feature branch with Jira ticket key
2. Implement changes with appropriate tests
3. Ensure all validation scripts pass locally
4. Create pull request with ticket key in title
5. Address automated validation feedback
6. Obtain code review approval
7. Merge after all checks pass

## Governance Standards

### Quality Gates

All code changes must pass:
- Framework structure validation
- Jira ticket traceability validation
- Automated test execution
- Code review approval

### Approval Process

Production deployments require:
- Manual approval from designated reviewers
- Successful completion of all test suites
- Validation of deployment artifacts

### Audit Trail

All deployments maintain complete audit trails including:
- Jira ticket references
- Test execution results
- Approval records
- Deployment timestamps

## Troubleshooting

### Common Issues

**Framework Validation Failures**
- Verify all required directories exist
- Check file permissions and accessibility

**Jira Validation Failures**
- Ensure branch name or PR title contains valid ticket key
- Verify ticket key format matches pattern ABC-123
- Check Jira API connectivity if using API validation

**Test Execution Failures**
- Review test logs in GitHub Actions
- Check environment variable configuration
- Verify browser dependencies are installed

### Support

For technical support or framework enhancement requests:
1. Create an issue in this repository
2. Include detailed error messages and logs
3. Specify environment and configuration details
4. Tag appropriate team members for review

## License

This project is licensed under the MIT License. See LICENSE file for details.

---

**Enterprise Test Automation Governance Framework**  
Version 1.0.0  
Maintained by the Quality Engineering Team
# Enterprise Test Automation Governance Framework

## What it is

## Govenance Framwork Demo Update.

A Node.js test automation framework that enforces basic governance rules for enterprise teams. It validates that your repository has the right folder structure and that branches/PRs include ticket keys (like ABC-123). Uses Playwright for browser testing and Cucumber for BDD scenarios.

## Folder Structure

```
├── features/           # Cucumber feature files
├── steps/             # Step definitions
├── pages/             # Page objects
├── scripts/validation/ # Framework and ticket validation
├── .github/workflows/ # CI/CD pipelines
└── reports/           # Generated test reports
```

## Requirements

- Node.js 18+
- Git
- GitHub repository with Actions enabled

## Installation

```bash
git clone https://github.com/acastil7IT/automation-governance-framework
cd automation-governance-framework
npm install
```

### Install Playwright browsers

**macOS:**
```bash
npx playwright install
```

**Linux:**
```bash
npx playwright install --with-deps
```

*Note: This framework has been tested on Linux (Ubuntu) and macOS.*

## Run Locally

```bash
# Validate framework structure
npm run validate:framework

# Validate ticket key in branch name (format: ABC-123)
npm run validate:jira

# Run tests
npm test                # Playwright tests
npm run test:cucumber   # Cucumber scenarios
```

## CI Workflows

### PR Validation
Automatically runs on pull requests:
- Validates framework structure
- Checks for ticket key in branch name or PR title
- Runs basic tests
- Uploads results as artifacts

### Release Pipeline
Manual workflow with environment approval:
- Requires GitHub Environment approval
- Runs full test suite
- Generates HTML reports
- Uploads artifacts

## Reports

Test reports are generated in the `reports/` folder and uploaded as GitHub Actions artifacts. Reports are not committed to the repository.

Access reports by downloading artifacts from the GitHub Actions workflow runs.

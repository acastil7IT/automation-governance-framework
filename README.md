# Enterprise Test Automation Governance Framework

A comprehensive Node.js-based test automation framework designed for enterprise environments, focusing on validation, approvals, and reporting rather than application logic.

## 🏗️ Framework Structure

```
enterprise-test-automation-governance/
├── features/                   # Cucumber feature files
│   └── example.feature        # Sample BDD scenarios
├── steps/                     # Step definitions
│   └── example.steps.js       # Cucumber step implementations
├── pages/                     # Page Object Model
│   └── example.page.js        # Page object patterns
├── scripts/validation/        # Governance validation scripts
│   ├── validate-framework.js  # Framework structure validation
│   └── validate-jira.js       # Jira ticket validation
├── .github/workflows/         # CI/CD pipelines
│   ├── pr-validation.yml      # Pull request validation
│   └── release.yml            # Release pipeline with approvals
├── reports/                   # Test reports and artifacts
│   └── README.md              # Report documentation
└── package.json               # Project dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd enterprise-test-automation-governance

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install --with-deps
```

### Validation
```bash
# Validate framework structure
npm run validate:framework

# Validate Jira ticket (requires branch/PR with ticket)
npm run validate:jira

# Run all validations
npm run validate:all
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file or set environment variables:

```bash
# Jira Integration
JIRA_BASE_URL=https://your-company.atlassian.net
JIRA_USERNAME=your-email@company.com
JIRA_API_TOKEN=your-api-token
JIRA_PROJECT_KEYS=GOV,TEST,AUTO

# Test Configuration
BASE_URL=https://your-app.com
TEST_USERNAME=test-user
TEST_PASSWORD=test-password
```

### GitHub Secrets
Configure the following secrets in your repository:

```
JIRA_BASE_URL          # Jira instance URL
JIRA_USERNAME          # Jira username/email
JIRA_API_TOKEN         # Jira API token
TEST_USERNAME          # Test application username
TEST_PASSWORD          # Test application password
```

## 🎯 Key Features

### 📋 Governance Validation
- **Framework Structure**: Validates required directories and files exist
- **Jira Integration**: Ensures all changes are linked to valid Jira tickets
- **Security Scanning**: Automated vulnerability and secret detection
- **Code Quality**: Linting and formatting validation

### 🔄 CI/CD Integration
- **Pull Request Validation**: Automated checks on every PR
- **Manual Approval Gates**: Required approvals for production deployments
- **Cross-browser Testing**: Chromium, Firefox, and WebKit support
- **Artifact Management**: Automated report generation and storage

### 📊 Reporting & Analytics
- **HTML Reports**: Interactive test results with screenshots
- **GitHub Pages**: Automatic report publishing for production
- **Artifact Retention**: Configurable retention policies
- **Integration Ready**: APIs for dashboard and notification integration

## 🛠️ Usage

### Running Tests
```bash
# Run all tests
npm test

# Run Cucumber scenarios
npm run test:cucumber

# Run specific test suites
npx playwright test --grep @smoke
npx playwright test --grep @regression
```

### Validation Scripts
```bash
# Check framework structure
node scripts/validation/validate-framework.js

# Validate Jira ticket in branch/PR
node scripts/validation/validate-jira.js
```

### CI/CD Workflows

#### Pull Request Validation
Automatically triggered on PR creation/updates:
- Framework structure validation
- Jira ticket validation
- Security scanning
- Smoke test execution
- Results posted as PR comments

#### Release Pipeline
Manual trigger with environment selection:
- Pre-deployment validation
- Manual approval gates (production)
- Full test suite execution
- Report generation and publishing
- Notification to stakeholders

## 📁 Directory Details

### `/features`
Cucumber feature files using Gherkin syntax for behavior-driven development.

### `/steps`
Step definitions that implement the Gherkin scenarios using Playwright.

### `/pages`
Page Object Model implementations for maintainable test code.

### `/scripts/validation`
Governance scripts that enforce framework standards and integrations.

### `/.github/workflows`
GitHub Actions workflows for automated validation and deployment.

### `/reports`
Generated test reports, screenshots, and artifacts.

## 🔒 Security & Compliance

### Secret Management
- No hardcoded credentials in code
- GitHub Secrets for sensitive data
- Environment-specific configuration
- Automated secret scanning

### Access Controls
- Manual approval gates for production
- Environment-specific permissions
- Audit trails for all deployments
- Role-based access controls

### Data Protection
- Sanitized test data in reports
- Secure artifact storage
- Configurable retention policies
- GDPR compliance considerations

## 🤝 Contributing

### Branch Naming
Include Jira ticket key in branch names:
```
feature/GOV-123-add-validation
bugfix/TEST-456-fix-reporting
hotfix/AUTO-789-security-patch
```

### Pull Request Requirements
- Jira ticket key in PR title or branch name
- All validation checks must pass
- Code review approval required
- Documentation updates for new features

### Development Workflow
1. Create feature branch with Jira ticket
2. Implement changes with tests
3. Run local validation: `npm run validate:all`
4. Create pull request
5. Address review feedback
6. Merge after approval

## 📚 Documentation

- [Test Reports Guide](reports/README.md)
- [Validation Scripts](scripts/validation/)
- [CI/CD Workflows](.github/workflows/)
- [Page Objects](pages/)

## 🆘 Support

### Common Issues
- **Validation Failures**: Check framework structure and Jira configuration
- **Test Failures**: Review screenshots and videos in reports
- **CI/CD Issues**: Check workflow logs and environment variables

### Getting Help
- Create an issue in this repository
- Contact the Test Automation Team
- Review documentation and examples
- Check GitHub Actions logs for detailed error messages

## 📄 License

MIT License - see LICENSE file for details.

---

*Enterprise Test Automation Governance Framework - Ensuring quality through validation, approval, and comprehensive reporting.*
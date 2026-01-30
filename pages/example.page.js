const { expect } = require('@playwright/test');

/**
 * Example Page Object for Governance Framework
 * This demonstrates the page object pattern for enterprise test automation
 */
class ExamplePage {
  constructor(page) {
    this.page = page;
    
    // Selectors for governance-related elements
    this.selectors = {
      // Dashboard elements
      dashboardTitle: '[data-testid="dashboard-title"]',
      approvalStatus: '[data-testid="approval-status"]',
      testResults: '[data-testid="test-results"]',
      
      // Navigation elements
      navigationMenu: '[data-testid="nav-menu"]',
      reportsLink: '[data-testid="reports-link"]',
      settingsLink: '[data-testid="settings-link"]',
      
      // Form elements
      submitButton: '[data-testid="submit-btn"]',
      cancelButton: '[data-testid="cancel-btn"]',
      
      // Status indicators
      successMessage: '[data-testid="success-message"]',
      errorMessage: '[data-testid="error-message"]',
      loadingSpinner: '[data-testid="loading-spinner"]'
    };
  }

  /**
   * Navigate to the governance dashboard
   * @param {string} baseUrl - Base URL of the application
   */
  async navigateToDashboard(baseUrl = process.env.BASE_URL || 'https://example.com') {
    await this.page.goto(`${baseUrl}/dashboard`);
    await this.waitForPageLoad();
  }

  /**
   * Wait for page to fully load
   */
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForSelector(this.selectors.dashboardTitle, { timeout: 10000 });
  }

  /**
   * Verify approval status is displayed
   * @param {string} expectedStatus - Expected approval status
   */
  async verifyApprovalStatus(expectedStatus) {
    const statusElement = await this.page.locator(this.selectors.approvalStatus);
    await expect(statusElement).toBeVisible();
    await expect(statusElement).toContainText(expectedStatus);
  }

  /**
   * Navigate to reports section
   */
  async navigateToReports() {
    await this.page.click(this.selectors.reportsLink);
    await this.page.waitForURL('**/reports');
  }

  /**
   * Submit a form and wait for response
   */
  async submitForm() {
    await this.page.click(this.selectors.submitButton);
    
    // Wait for either success or error message
    await Promise.race([
      this.page.waitForSelector(this.selectors.successMessage),
      this.page.waitForSelector(this.selectors.errorMessage)
    ]);
  }

  /**
   * Verify success message is displayed
   * @param {string} expectedMessage - Expected success message
   */
  async verifySuccessMessage(expectedMessage) {
    const successElement = await this.page.locator(this.selectors.successMessage);
    await expect(successElement).toBeVisible();
    if (expectedMessage) {
      await expect(successElement).toContainText(expectedMessage);
    }
  }

  /**
   * Verify error message is displayed
   * @param {string} expectedMessage - Expected error message
   */
  async verifyErrorMessage(expectedMessage) {
    const errorElement = await this.page.locator(this.selectors.errorMessage);
    await expect(errorElement).toBeVisible();
    if (expectedMessage) {
      await expect(errorElement).toContainText(expectedMessage);
    }
  }

  /**
   * Wait for loading to complete
   */
  async waitForLoadingComplete() {
    await this.page.waitForSelector(this.selectors.loadingSpinner, { state: 'hidden' });
  }

  /**
   * Take screenshot for reporting
   * @param {string} name - Screenshot name
   */
  async takeScreenshot(name) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await this.page.screenshot({ 
      path: `reports/screenshots/${name}-${timestamp}.png`,
      fullPage: true 
    });
  }
}

module.exports = { ExamplePage };
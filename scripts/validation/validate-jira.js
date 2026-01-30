#!/usr/bin/env node

const { execSync } = require('child_process');

const jiraTicketPattern = /[A-Z]+-\d+/;

function extractJiraTicket() {
  // Check PR title from environment
  const prTitle = process.env.GITHUB_PR_TITLE || process.env.PR_TITLE;
  if (prTitle && jiraTicketPattern.test(prTitle)) {
    return prTitle.match(jiraTicketPattern)[0];
  }

  // Check branch name
  try {
    const branchName = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
    if (jiraTicketPattern.test(branchName)) {
      return branchName.match(jiraTicketPattern)[0];
    }
  } catch (error) {
    console.log('Warning: Could not get branch name');
  }

  return null;
}

console.log('Validating Jira ticket...');

const ticketKey = extractJiraTicket();

if (!ticketKey) {
  console.log('❌ No Jira ticket found in branch name or PR title');
  console.log('Expected format: ABC-123');
  process.exit(1);
} else {
  console.log(`✅ Found Jira ticket: ${ticketKey}`);
  console.log('Jira ticket validation passed');
  
  // Placeholder for Jira API validation
  if (process.env.JIRA_API_TOKEN) {
    console.log('Note: Jira API validation would be performed here');
  }
}
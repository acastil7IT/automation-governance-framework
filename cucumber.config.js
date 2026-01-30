module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    import: ['steps/**/*.js'],
    format: [
      'progress-bar',
      ['json', 'reports/cucumber-report.json'],
      ['html', 'reports/cucumber-report.html']
    ],
    parallel: 2,
    timeout: 60000
  }
};
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const requiredDirectories = ['features', 'steps', 'pages'];
const errors = [];

console.log('Validating framework structure...');

for (const dir of requiredDirectories) {
  const dirPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) {
    errors.push(`Missing required directory: ${dir}`);
  }
}

if (errors.length > 0) {
  console.log('\nValidation failed:');
  errors.forEach(error => console.log(`  ❌ ${error}`));
  process.exit(1);
} else {
  console.log('✅ All required directories exist');
  console.log('Framework structure validation passed');
}
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, description) {
  try {
    log(`🔄 ${description}...`, 'blue');
    execSync(command, { stdio: 'inherit' });
    log(`✅ ${description} completed`, 'green');
  } catch (error) {
    log(`❌ ${description} failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

function checkGitStatus() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {
      log('⚠️  You have uncommitted changes. Please commit them first.', 'yellow');
      return false;
    }
    return true;
  } catch (error) {
    log('❌ Git is not initialized or not available', 'red');
    return false;
  }
}

function createComponentIntegration(componentName, description) {
  log(`🚀 Starting integration for: ${componentName}`, 'green');
  
  // Check git status
  if (!checkGitStatus()) {
    return;
  }
  
  // Create a new branch
  const branchName = `feat/integrate-${componentName.toLowerCase().replace(/\s+/g, '-')}`;
  runCommand(`git checkout -b ${branchName}`, 'Creating feature branch');
  
  // Run tests
  runCommand('npm run type-check', 'Running TypeScript check');
  runCommand('npm run lint', 'Running linting');
  
  // Build project
  runCommand('npm run build', 'Building project');
  
  // Add all changes
  runCommand('git add .', 'Staging changes');
  
  // Commit changes
  const commitMessage = `feat: integrate ${componentName}\n\n${description}`;
  runCommand(`git commit -m "${commitMessage}"`, 'Committing changes');
  
  // Push to remote
  runCommand(`git push origin ${branchName}`, 'Pushing to remote');
  
  log(`🎉 Integration completed for ${componentName}!`, 'green');
  log(`📝 Branch: ${branchName}`, 'blue');
  log(`🔗 Create a pull request to merge into main`, 'yellow');
}

// CLI interface
const args = process.argv.slice(2);

if (args.length < 2) {
  log('Usage: node scripts/integrate-component.js "Component Name" "Description"', 'yellow');
  log('Example: node scripts/integrate-component.js "Feature108" "Add responsive tabbed interface component"', 'blue');
  process.exit(1);
}

const componentName = args[0];
const description = args[1];

createComponentIntegration(componentName, description); 
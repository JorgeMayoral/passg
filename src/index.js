#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

program.version('1.0.0').description('Password Generator');

program
  .option('-l --length <number>', 'length of the password', 8)
  .option('-s --save', 'save password to file', false)
  .option('-o --output <text>', 'filename of the output', 'passwords.txt')
  .option('-N --no-numbers', 'remove numbers from generated password')
  .option('-S --no-symbols', 'remove symbols from generated password')
  .option('-p --print', 'print generated password', false)
  .option('-C --no-copy', 'do not copy generated password to clipboard')
  .parse();

const { length, save, numbers, symbols, print, output, copy } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Output generated password
if (print) {
  console.log(
    chalk.blue('🔒 Generated Password:'),
    chalk.bold(generatedPassword),
  );
}

// Copy to clipboard
if (copy) {
  clipboardy.writeSync(generatedPassword);
  console.log(chalk.green('📎 Password copied to clipboard!'));
}

// Save to file
if (save) {
  savePassword(generatedPassword, output);
}

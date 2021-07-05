const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');

const savePassword = (password, filename) => {
  fs.open(path.join(__dirname, '../../', filename), 'a', 0o666, (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.yellow(`💾 Password saved to ${filename}`));
      });
    });
  });
};

module.exports = savePassword;

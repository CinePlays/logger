const chalk = require("chalk");
const moment = require("moment");

function timestamp() {
  return moment().format("YYYY-MM-DD HH:mm:ss");
}

module.exports = class {
  static log(content) {
    console.log(`${timestamp()} | ${chalk.black.bgGray(" Log   ")} > ${content}`);
  }

  static warn(content) {
    console.log(`${timestamp()} | ${chalk.black.bgYellow(" Warn  ")} > ${content}`);
  }

  static error(content) {
    console.log(`${timestamp()} | ${chalk.black.bgRed(" Error ")} > ${content}`);
  }

  static info(content) {
    console.log(`${timestamp()} | ${chalk.black.bgGreenBright(" Info  ")} > ${content}`);
  }

  static init(content) {
    console.log(`${timestamp()} | ${chalk.black.bgMagentaBright(" Init  ")} > ${content}`);
  }

  static debug(content) {
    console.log(`${timestamp()} | ${chalk.black.bgCyanBright(" Debug ")} > ${content}`);
  }

  constructor(name = null) {
    this._name = name ? chalk.black.bgWhite(` ${name} `) : "";
  }

  log(content) {
    console.log(`${timestamp()} | ${this._name}${chalk.black.bgGray(" Log   ")} > ${content}`);
  }

  warn(content) {
    console.log(`${timestamp()} | ${this._name}${chalk.black.bgYellow(" Warn  ")} > ${content}`);
  }

  error(content) {
    console.log(`${timestamp()} | ${this._name}${chalk.black.bgRed(" Error ")} > ${content}`);
  }

  info(content) {
    console.log(`${timestamp()} | ${this._name}${chalk.black.bgGreenBright(" Info  ")} > ${content}`);
  }

  init(content) {
    console.log(`${timestamp()} | ${this._name}${chalk.black.bgMagentaBright(" Init  ")} > ${content}`);
  }

  debug(content) {
    console.log(`${timestamp()} | ${this._name}${chalk.black.bgCyanBright(" Debug ")} > ${content}`);
  }
};

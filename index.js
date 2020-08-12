const chalk = require("chalk");
const moment = require("moment");

function timestamp() {
  return moment().format("YYYY-MM-DD HH:mm:ss");
}

module.exports = {
  log: (content) => {
    console.log(`${timestamp()} | ${chalk.black.bgGray(" Log   ")} > ${content}`);
  },

  warn: (content) => {
    console.log(`${timestamp()} | ${chalk.black.bgYellow(" Warn  ")} > ${content}`);
  },

  error: (content) => {
    console.log(`${timestamp()} | ${chalk.black.bgRed(" Error ")} > ${content}`);
  },

  info: (content) => {
    console.log(`${timestamp()} | ${chalk.black.bgGreenBright(" Info  ")} > ${content}`);
  },

  init: (content) => {
    console.log(`${timestamp()} | ${chalk.black.bgMagentaBright(" Init  ")} > ${content}`);
  },

  debug: (content) => {
    console.log(`${timestamp()} | ${chalk.black.bgCyanBright(" Debug ")} > ${content}`);
  },
};

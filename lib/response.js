var chalk = require("chalk");

exports = module.exports = function (item) {
  console.log("%s <= %s  %s",
    chalk.bgGreen.black(" Response "),
    chalk.green(item.url),
    chalk.black(item.time)
  );
  console.log("\n");
};

var chalk = require("chalk");

exports = module.exports = function (item) {
  var msg = typeof item.msg == "object" ? JSON.stringify(item.msg, function(key, value){
    return (typeof value === "function") ? "[Function]" : value;
  }, 2) : item.msg;
  msg = msg.replace(/^/mg, "    ");

  console.log("    %s%s \n%s  %s",
    chalk.bgCyan.gray(" Info "),
    item.tip ? chalk.bgBlack(' ' + item.tip + ' ') : '',
    chalk.white(msg),
    chalk.black(item.time)
  );
};

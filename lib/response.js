var chalk = require("chalk");
var fs = require("fs");

exports = module.exports = function (item) {
  console.log("%s <= %s  %s\n",
    chalk.bgGreen.black(" Response "),
    chalk.green(item.url),
    chalk.black(item.time)
  );

  if (item.content) {
    var p = process.cwd()+"/log";
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p);
      fs.chmod(p, 0777);
    }
    var u = p+'/'+item.url.replace(/\:|\//g, "_").replace(/_{1,}/g, "_");
    fs.writeFile(u, item.content, function () {
      fs.chmod(u, 0777);
    });
  }
};

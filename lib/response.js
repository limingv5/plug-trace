var chalk = require("chalk");
var fs = require("fs");

function MD5(str) {
  var crypto = require("crypto");
  return crypto.createHash("md5").update(str).digest("hex");
}

exports = module.exports = function (item) {
  console.log("%s <= %s  %s\n",
    chalk.bgGreen.black(" Response "),
    chalk.green(item.url),
    chalk.black(item.time)
  );

  if (item.content) {
    var p = process.cwd() + "/.cache";
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p);
      fs.chmod(p, 0777);
    }

    p += "/log";
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p);
      fs.chmod(p, 0777);
    }

    var u = p + '/' + MD5(item.url);
    fs.writeFile(u, item.content, function () {
      console.log(u);
      fs.chmod(u, 0777);
    });
  }
};

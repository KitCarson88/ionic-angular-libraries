var path = require('path');
var fs = require('fs');

function copyFileSync(source, target)
{

  var targetFile = target;

  //if target is a directory a new file with the same name will be created
  if (fs.existsSync(target))
  {
    if (fs.lstatSync(target).isDirectory())
    {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target)
{
  var files = [];

  //check if folder needs to be created or integrated
  var targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder))
  {
    fs.mkdirSync(targetFolder);
  }

  //copy
  if (fs.lstatSync(source).isDirectory())
  {
    files = fs.readdirSync(source);
    files.forEach(function (file)
    {
      var curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory())
      {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else
      {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}

function copyStyles() {
    console.log("Copy kitcarson88 ionic library styles");
  //fs.writeFileSync("./node_modules/redux/index.d.ts", fs.readFileSync("./scripts/redux-missing-symbol-observable-fix-file/index.d.ts"));
  copyFolderRecursiveSync("./projects/ionic-angular-utilities/src/lib/styles", "./dist/ionic-angular-utilities/lib")
};

copyStyles();
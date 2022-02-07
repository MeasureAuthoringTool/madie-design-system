const fs = require('fs');
const path = require('path');

const svgFilePath = path.join(__dirname, '../shared/images/icons/svg');
const buildFilePath = path.join(__dirname, './dist/qpp-style-angular/assets');

/**
 * Adapted from https://stackoverflow.com/a/26038979
 * This needs to be done because Angular's ng-packagr builder does not support copying assets
 * from outside of the angular workspace into the build, this is a temporary solution to avoid
 * adding out of date dependencies. We are researching a more robust approach
 */
function copyFolderRecursiveSync(source, target) {
  console.info('Copying folder:', svgFilePath, 'To:', buildFilePath);
  let files = [];

  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function(file) {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, target);
      } else {
        fs.copyFileSync(curSource, path.join(target, file));
      }
    });
  }
  console.info('Copy complete!');
}

copyFolderRecursiveSync(svgFilePath, buildFilePath);

const { execSync } = require('child_process');
const fs = require('fs');
const readline = require('readline');
const path = require('path');

const libName = 'test-lib';
const buildScript = 'npm run test-lib:build-prod';

function publish() {
  const libraryFolder = path.resolve(`${rootPath()}/projects/${libName}`);
  const distFolder = path.resolve(`${rootPath()}/dist/${libName}`);
  const currentVersion = JSON.parse(fs.readFileSync(`${libraryFolder}/ui-sdk/package.json`)).version;
  const promptFactory = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const libraryPackageJson = JSON.parse(fs.readFileSync(`${libraryFolder}/ui-sdk/package.json`));
  const specifyVersionMessage = `Specify version: Current - ${currentVersion} (Leave empty to increment patch version to ${increaseVersion(libraryPackageJson.version)})\nNew version: `;

  promptFactory.question(specifyVersionMessage, (customVersion) => {
    if (customVersion) {
      libraryPackageJson.version = customVersion;

      fs.writeFileSync(`${libraryFolder}/package.json`, JSON.stringify(libraryPackageJson, null, '\t'), 'utf8');
    } else {
      execSync(`npm version patch`, { cwd: libraryFolder });
    }

    execSync(buildScript);
    execSync('npm publish', { cwd: distFolder });

    promptFactory.close();
  });
}

function increaseVersion(version, threshold = 1) {
  const versionArr = version.split('.');
  const increasedVersion = versionArr.map((item, index) => {
    if (index === versionArr.length - 1) {
      return (+item + threshold).toString();
    }

    return item;
  });

  return increasedVersion.join('.');
}

function rootPath() {
  const scriptsFolderIndex = __dirname.split('\\').findIndex((item) => item === 'scripts');

  return path.resolve(__dirname.split('\\').slice(0, scriptsFolderIndex).join('\\'));
}

publish();

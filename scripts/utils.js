// const fs = require("fs");
// const config = require('./config');

// const CONFIG_FILE_NAME_PATH = process.env.EXPO_CONFIG_FILE_PATH || "./app.json";

// // function getExpPublishName(packageName, branchName) {
// //   return `${packageName}-${branchName}`.replace(/[^a-zA-Z0-9\\-]/g, "-");
// // }

// function getExpPublishName(packageName, githubPullRequestId) {
//   return `${packageName}-pr-${githubPullRequestId}`;

// function getSafeName(name) {
//   return `${name}`.replace(/[^a-zA-Z0-9\\-]/, '-');
// }

// function getExpChannelName() {
//   return getSafeName(config.expReleaseChannel);
// }

// function readPackageJSON() {
//   return JSON.parse(fs.readFileSync("./package.json"));
// }

// function writePackageJSON(content) {
//   fs.writeFileSync("./package.json", JSON.stringify(content, null, 2));
// }

// function readAppJSON() {
//   return JSON.parse(fs.readFileSync(CONFIG_FILE_NAME_PATH));
// }

// function writeAppJSON(content) {
//   fs.writeFileSync(CONFIG_FILE_NAME_PATH, JSON.stringify(content, null, 2));
// }

// module.exports = {
//   getSafeName,
//   getExpChannelName,
//   readPackageJSON,
//   writePackageJSON,
//   readAppJSON,
//   writeAppJSON
// };

const fs = require('fs');
const config = require('./config');

function getSafeName(name) {
  return `${name}`.replace(/[^a-zA-Z0-9\\-]/, '-');
}

function getExpChannelName() {
  return getSafeName(config.expReleaseChannel);
}

function readPackageJSON() {
  return JSON.parse(fs.readFileSync('./package.json'));
}

function writePackageJSON(content) {
  fs.writeFileSync('./package.json', JSON.stringify(content, null, 2));
}

function readAppJSON() {
  return JSON.parse(fs.readFileSync('./app.json'));
}

function writeAppJSON(content) {
  fs.writeFileSync('./app.json', JSON.stringify(content, null, 2));
}

module.exports = {
  getSafeName,
  getExpChannelName,
  readPackageJSON,
  writePackageJSON,
  readAppJSON,
  writeAppJSON
};

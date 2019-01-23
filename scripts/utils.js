const fs = require("fs");

const CONFIG_FILE_NAME_PATH = process.env.EXPO_CONFIG_FILE_PATH || "./app.json";

// function getExpPublishName(packageName, branchName) {
//   return `${packageName}-${branchName}`.replace(/[^a-zA-Z0-9\\-]/g, "-");
// }

function getExpPublishName(packageName, githubPullRequestId) {
  return `${packageName}-pr-${githubPullRequestId}`;
}

function readPackageJSON() {
  return JSON.parse(fs.readFileSync("./package.json"));
}

function writePackageJSON(content) {
  fs.writeFileSync("./package.json", JSON.stringify(content, null, 2));
}

function readAppJSON() {
  return JSON.parse(fs.readFileSync(CONFIG_FILE_NAME_PATH));
}

function writeAppJSON(content) {
  fs.writeFileSync(CONFIG_FILE_NAME_PATH, JSON.stringify(content, null, 2));
}

module.exports = {
  getExpPublishName,
  readPackageJSON,
  writePackageJSON,
  readAppJSON,
  writeAppJSON
};

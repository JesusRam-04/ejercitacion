const fs = require("fs");

function getContentFile(filePath) {
    const file = fs.readFileSync(filePath, "utf-8");
    return file;
}

module.exports = { getContentFile: getContentFile };
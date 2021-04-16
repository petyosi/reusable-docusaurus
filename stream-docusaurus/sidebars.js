const path = require("path");
// in this case, we are loading only the TOC for the current SDK.
// in the combined mode, this would be different.
const toc = require(path.join(process.env["SDK_PATH"], "./sidebars.js"));
module.exports = toc;

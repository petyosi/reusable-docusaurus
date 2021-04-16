const path = require("path");

const typedocSidebar = require(path.join(
  process.env["SDK_PATH"],
  "./typedoc-sidebar.js"
));

module.exports = {
  docs: {
    "Docusaurus Tutorial": [
      "getting-started",
      "create-a-page",
      "create-a-document",
      "create-a-blog-post",
      "markdown-features",
      "thank-you",
    ],
    API: typedocSidebar,
  },
};

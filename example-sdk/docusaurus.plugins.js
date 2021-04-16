const path = require("path");
module.exports = (cwd) => {
  return {
    plugins: [
      [
        path.join(cwd, "./node_modules/docusaurus-plugin-typedoc"),

        {
          entryPoints: [path.join(cwd, "./src/index.ts")],
          tsconfig: path.join(cwd, "./tsconfig.json"),
          docsRoot: path.join(cwd, "docs"),
          out: "api",
          sidebar: {
            sidebarFile: path.join(cwd, "typedoc-sidebar.js"),
            fullNames: false,
          },
        },
      ],
    ],
  };
};

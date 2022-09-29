// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");
const fs = require("node:fs");
const CONTENT_PATH = process.env["CONTENT_PATH"];

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const sdkConfigPath = path.join(CONTENT_PATH, "docs", "docs.config.js");

/**
 * @param source string
 */
const getDirectoriesAndSymlinks = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => {
      return dirent.isDirectory() || dirent.isSymbolicLink();
    })
    .map((dirent) => dirent.name);

let singleSdkConfig = null;

const contentDocPlugins = [];
const links = [];

if (fs.existsSync(sdkConfigPath)) {
  singleSdkConfig = require(sdkConfigPath);

  contentDocPlugins.push([
    "@docusaurus/plugin-content-docs",
    {
      id: "default",
      path: path.resolve(path.join(CONTENT_PATH, "./docs")),
      routeBasePath: `docs/${singleSdkConfig.path}`,
      sidebarPath: require.resolve("./sidebars.js"),
      editUrl:
        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      // ... other options
    },
  ]);

  links.push({
    type: "doc",
    docId: "README",
    docsPluginId: "default",
    position: "left",
    label: singleSdkConfig.name,
  });
} else {
  const dirs = getDirectoriesAndSymlinks(path.join(CONTENT_PATH, "docs"));
  dirs.forEach((dirName, index) => {
    const sdkConfig = require(path.join(
      CONTENT_PATH,
      "docs",
      dirName,
      "docs.config.js"
    ));
    contentDocPlugins.push([
      "@docusaurus/plugin-content-docs",
      {
        id: index === 0 ? "default" : sdkConfig.name,
        path: fs.realpathSync(path.join(CONTENT_PATH, "docs", dirName)),
        routeBasePath: `docs/${sdkConfig.path}`,
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl:
          "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // ... other options
      },
    ]);

    links.push({
      type: "doc",
      docId: "README",
      docsPluginId: index === 0 ? "default" : sdkConfig.name,
      position: "left",
      label: sdkConfig.name,
    });
  });
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
      },
    ],
  ],
  plugins: [...contentDocPlugins],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [...links],
      },
      footer: {},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

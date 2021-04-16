This is an example of a "packaged" docusaurus instance which reads content and partial configuration from a local directory.


## Step 1. Install and link the stream-docusaurus package for local testing

```sh
cd ./stream-docusaurus
yarn
npm link
```

## Step 2. Try it in the SDK project

```sh
cd ./example-sdk
npm install
npx stream-docusaurus
```

The local SDK project has a locally configured typedoc plugin and sidebars.js file.

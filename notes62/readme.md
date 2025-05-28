# Notes62 - NPM Commands

This directory contains notes on common npm (Node Package Manager) commands.

## Basic NPM Commands

- `npm -v`: Check the installed npm version.
- `npm init`: Initializes a new `package.json` file for your project.
- `npm install <package-name>`: Installs a specific package.
  - Example: `npm install lodash`
- `npm install`: Installs all dependencies listed in `package.json`.
- `npm uninstall <package-name>`: Uninstalls a package.
  - Example: `npm uninstall lodash`
- `npm update <package-name>`: Updates a specific package to the latest version.
  - Example: `npm update lodash`
- `npm outdated`: Checks for outdated packages.
- `npm start`: Runs the script specified in the "start" field of `package.json`.
- `npm run <script-name>`: Runs a custom script defined in `package.json`.
  - Example: `npm run dev`
- `npm build`: Runs the build script defined in `package.json`.
- `npm test`: Runs the test script defined in `package.json`.
- `npm publish`: Publishes your package to the npm registry (requires an npm account).

## Global Installations

- `npm install -g <package-name>`: Installs a package globally (accessible from any project).
  - Example: `npm install -g create-react-app`
- `npm uninstall -g <package-name>`: Uninstalls a globally installed package.
  - Example: `npm uninstall -g create-react-app`

## Package Information

- `npm view <package-name>`: Displays information about a package.
  - Example: `npm view lodash`
- `npm search <package-name>`: Searches for packages in the npm registry.
  - Example: `npm search react`

## Other Useful Commands

- `npm cache clean --force`: Clears the npm cache (use with caution).
- `npm config get <key>`: Gets an npm configuration setting.
  - Example: `npm config get registry`
- `npm config set <key> <value>`: Sets an npm configuration setting.
  - Example: `npm config set registry https://registry.npmjs.org/`


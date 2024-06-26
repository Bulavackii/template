# My App

A sample project setup with React, Redux, Redux Toolkit, Redux Saga, Thunk, Pug, SCSS, PHP, Laravel, SQL, TypeScript, Jest, and E2E testing.

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd my-app
    ````

2. Install dependencies with the legacy-peer-deps flag to prevent conflicts:

    ```bash
    npm install --legacy-peer-deps
    ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm build`

Builds the app for production to the `public` folder.

### `npm lint`

Lints the code for any issues.

### `npm lint:fix`

Lints the code and automatically fixes issues where possible.

### `npm test`

Runs unit tests.

### `npm test:watch`

Runs unit tests in watch mode.

### `npm test:coverage`

Generates a code coverage report for the unit tests.

## Configuration

### Webpack

The webpack configuration is set up to handle TypeScript, React, SCSS, Pug templates, and more. The relevant configuration can be found in `webpack.config.js`.

Here's a snippet of the configuration including `compression-webpack-plugin`:

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './client/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/templates/index.pug',
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
};



****-------------------------------------------------------------------****

Для использования uuid в вашем проекте, необходимо импортировать его там, где он нужен. Вот пример:


import { v4 as uuidv4 } from 'uuid';

const myUuid = uuidv4();
console.log(myUuid);


****-------------------------------------------------------------------****


/**
 * Function to add two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
    return a + b;
}

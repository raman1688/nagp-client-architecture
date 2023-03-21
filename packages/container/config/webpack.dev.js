const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  devtool: "eval-source-map",
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        hangman: "hangman@http://localhost:8081/remoteEntry.js",
        tictactoe: "tictactoe@http://localhost:8082/remoteEntry.js",
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);

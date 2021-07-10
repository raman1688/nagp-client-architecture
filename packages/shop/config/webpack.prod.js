const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');
const packageJSON = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js', 
        publicPath: '/shop/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shop',
            filename: 'remoteEntry.js',
            exposes: {
                './ShopApp': './src/bootstrap'
            },
            shared: packageJSON.dependencies,
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);

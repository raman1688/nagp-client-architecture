const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');
const packageJSON = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js', 
        publicPath: '/cart/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartApp': './src/bootstrap'
            },
            shared: packageJSON.dependencies,
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);

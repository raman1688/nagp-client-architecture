const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

// const domain = process.env.PRODUCTION_DOMAIN;
const domain = 'https://d2i0cep6siore0.cloudfront.net';

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                shop: `shop@${domain}/shop/latest/remoteEntry.js`,
                auth: `auth@${domain}/auth/latest/remoteEntry.js`,
                dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`,
                cart: `cart@${domain}/cart/latest/remoteEntry.js`
            },
            shared: packageJSON.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);

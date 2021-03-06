const config = require('./webpack.base.config');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(config, {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(process.cwd(), 'app'),
        historyApiFallback: true,
        stats: {
            colors: true,
            chunks: false,
            'errors-only': true,
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
            },
        }),
    ],
});

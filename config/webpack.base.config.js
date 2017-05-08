const path = require('path');
const webpack = require('webpack');
const postcssConfig = require('./postcss.config');

process.noDeprecation = true;

module.exports = {
    context: path.join(process.cwd(), 'dev'),
    entry: './script/index.js',
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['env'],
                        },
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            failOnWarning: true,
                            failOnError: true,
                        },
                    },
                ],
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            failOnWarning: true,
                            failOnError: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                ],
            },
            {
                test: /\.s[a|c]ss$/,
                use: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    {
                        loader: 'postcss-loader',
                        options: postcssConfig,
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: 'file-loader?limit=1024&name=font/[name].[ext]',
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: 'url-loader?mimetype=image/png',
            },
        ],
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.js',
        },
        extensions: ['.js', '.jsx', '.vue'],
        modules: [
            'node_modules',
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: postcssConfig.plugins,
                vue: {
                    postcss: postcssConfig.plugins,
                    loaders: {
                        sass: 'style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax',
                        scss: 'style-loader!css-loader!postcss-loader!sass-loader',
                    },
                    cssModules: {
                        localIdentName: '[path][name]---[local]---[hash:base64:5]',
                        camelCase: true,
                    },
                },
                eslint: {
                    configFile: path.join(process.cwd(), '.eslintrc'),
                },
            },
        }),
    ],
};

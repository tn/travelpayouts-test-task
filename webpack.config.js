const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/App.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/, 
                loader: 'source-map-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.json' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        compress: false,
        port: 9999,
        historyApiFallback: true,
        hot: true,
        overlay: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
            hash: false
        }),
        new MiniCSSExtractPlugin({
            filename: 'bundle.css',
            chunkFilename: '[id].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProgressPlugin()
    ]
};

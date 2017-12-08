/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "November 28th 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Insert Project Name Here!
 * @Filename: webpack.config.js
 * @Last modified by:   JDure
 * @Last modified time: "November 28th 2017"
 */

var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

var webpackConfig = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({title: "New Webpack Project", template: "src/index.ejs"}),new ExtractTextPlugin({filename: 'main.css', allChunks: true})],
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
            }
        ]
    },
};

module.exports = webpackConfig;

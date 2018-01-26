const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var snippetEntries =  glob.sync('./src/snippets/*.js').reduce(function (entries, file) {
    entries.push(file);
    return entries;
},  []);

console.log(snippetEntries);
module.exports = {

    entry: {
        "bundle": './src/index.js',
        "snippets": snippetEntries
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
     ],
    module:
        {
            rules: [
                {
                    test: /\.html/,
                    loader: 'file-loader?name=[name].[ext]'
                }
            ]
        }
    ,

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:
            '[name].js',
        libraryTarget:
            'umd'
    }
}
;
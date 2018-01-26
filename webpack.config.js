const path = require('path');
const glob = require('glob');

module.exports = {

    entry: [
        "./src/index.html",
        './src/index.js',
        glob.sync('./snippets/*.js').reduce(function(entry, file){
            entry['./snippets'].push(file);
            return entry;
        }, { './snippets': []}),
    ],
    module: {
        rules: [
            {
                test: /\.html/,
                loader: 'file-loader?name=[name].[ext]',
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, ''),
        filename: '[name].js',
        libraryTarget: 'umd'
    }
};
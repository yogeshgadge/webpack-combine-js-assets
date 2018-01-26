const path = require('path');
const glob = require('glob');

var snippetEntries =  glob.sync('./src/snippets/*.js').reduce(function (entries, file) {
    entries.push(file);
    return entries;
},  []);

console.log(snippetEntries);
module.exports = {

    entry: {
        "bundle": './src/index.js',
        "snippets": snippetEntries,
        "index" : ['./src/index.html']
    },
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
var os = require('os'),
    path = require('path');

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a valid name to reference
              query: {
                presets: ['es2015']
              }
            }
        ]
    },
    devtool: "#inline-source-map",
    devServer: {
        host: os.hostname()
    }
};
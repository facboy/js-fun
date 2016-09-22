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
        ]
    },
    devServer: {
        host: os.hostname()
    }
};
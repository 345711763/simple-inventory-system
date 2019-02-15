const path = require("path");
const webpack = require("webpack");
const browserConfig={
    entry:"./src/browser/index.js",
    output:{
        filename:"bundle.js",
        path: path.resolve(__dirname,'public'),
        publicPath:"/"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader:"babel-loader",
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        })
    ]

};
module.exports = browserConfig;
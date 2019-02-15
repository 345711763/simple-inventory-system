const path = require("path");
const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");

const serverConfig ={
    target: 'node',
    entry:'./src/server/app.js',
    output:{
        filename:'server.js',
        path:__dirname,
        publicPath: "/"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/
            },
        ]
    },
    externals: [webpackNodeExternals()],
    plugins:[
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        }),
    ],
    node:{
        __dirname: false,
        __filename: false
    }
};

module.exports = serverConfig;
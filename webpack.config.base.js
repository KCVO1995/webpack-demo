var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack-demo',
            template: 'src/assets/admin.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", 
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: { implementation: require("dart-sass")}
                    }
                ]
            },
            { 
                test: /\.styl$/, 
                loader: ['style-loader', 'css-loader', 'stylus-loader' ]
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    }
                ]
            }
        ]
    }
};
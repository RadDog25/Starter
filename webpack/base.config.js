const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: [
            './src/js/main.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: './js/[name].[hash:6].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            filename: './index.html',
            template: './src/index.html',
        })
    ]
}
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //项目入口文件
    entry: './src/main.js',
    output: {
        //打包出口路径
        path: path.join(__dirname, './dist'),
        //通过devServer访问路径
        // publicPath: '/dist/',
        //打包后的文件名
        filename: 'bundle.js'
    },
    // mode:'development',
    // devServer: {
    //     hot: true
    // },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: 'index.html'
        }),
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            }, {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }, {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax',
                ],
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                // options: {
                //     presets: ['es2015']
                // },
                exclude: '/node_modules/'
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash:8]'
                }
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    }
};
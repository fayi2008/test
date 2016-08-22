var webpack = require('webpack')
var ExtractTextPlugin=require('extract-text-webpack-plugin')

module.exports = {
    //页面入口文件配置
    entry: {
        index: './src/main.js',
        header1:'./src/js/header1'

    },
    //入口文件输出配置
    output: {
        path: 'dist',
        filename: 'js/[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            {test: /\.vue$/, loader: 'vue'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader','css-loader')},
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/index.css')
        
    ]

}
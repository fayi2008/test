var webpack = require('webpack')
var ExtractTextPlugin=require('extract-text-webpack-plugin')

module.exports = {
    //页面入口文件配置
    entry: {
        index: './src/main.js',
        header1:'./src/js/header/header1.js',
        header2:'./src/js/header/header2.js',
        banner1:'./src/js/banner/1.js',
        banner2:'./src/js/banner/2.js'
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
            {test: /\.less/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader','css-loader')},
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css')
        
    ]

}
var webpack = require('webpack')
var ExtractTextPlugin=require('extract-text-webpack-plugin')
var path=require('path')

module.exports = {
    //页面入口文件配置
    entry: {
        index: './src/index.js',
        header1:'./src/js/header/header1.js',
        header2:'./src/js/header/header2.js',
        header3:'./src/js/header/header3.js',
        banner1:'./src/js/banner/1.js',
        banner2:'./src/js/banner/2.js',
        banner3:'./src/js/banner/3.js',
        banner4:'./src/js/banner/4.js',
        banner5:'./src/js/banner/5.js',
        long1:'./src/js/long/1.js',
        long2:'./src/js/long/2.js'
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
            {test: /\.less/, loader: ExtractTextPlugin.extract("style-loader", 'css-loader!less-loader!autoprefixer-loader')},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader!autoprefixer-loader')},
            {test: /\.js$/, loader: 'babel-loader',exclude: /(node_modules|bower_components)/},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    // 配置babel转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },

    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({name: "com", minChunks: 3}),
        new webpack.ProvidePlugin({// 全局依赖,不需要import了
            $ : "jquery",
            jQuery : "jquery",
            "window.jQuery" : "jquery",
            vue:"vue",
            _plus:path.join(__dirname,'/src/public.js')
        })
    ]

}
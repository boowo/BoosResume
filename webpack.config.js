/**
 * Created by wangbo on 17/11/24.
 * 开发环境配置的打包文件
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    entry: {
        main: path.resolve(__dirname, './src/app.js')
    },
    output: {
        path: path.resolve(__dirname,'./dev'),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,  // 热重载
        inline: true,  // 启用inline 模式
        port: 8080,
        contentBase: "./dev",//本地服务器所加载的页面所在的目录
        historyApiFallback: true //不跳转，用于开发单页面应用，依赖于HTML5 history API 设置为true点击链接还是指向index.html
    },
    module: {
        rules: [
            {test: /\.less/, use: ['style-loader','css-loader','less-loader']},
            {test: /\.css$/, use: ['style-loader','css-loader'] },
            {test: /\.(png|jpg|jpeg)$/, use: ['url-loader']},
            {test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.json', '.scss','.less','jsonp'],
    }
};

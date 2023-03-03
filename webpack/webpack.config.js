const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html'
})
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const cleanWebpackPlugin=new CleanWebpackPlugin()

module.exports = {
    mode: 'development',//mode用来指定构建模式，可选有development和production
    // devtool:'eval-sourse-map',
    devtool:'nosourses-sourse-map',//只提示行号，不显示源码
    entry: path.join(__dirname, './src/index.js'),//打包入口
    output: {
        path: path.join(__dirname, './dist'),//输出文件的路径
        filename: 'js/bundle.js'//输出文件名
    },
    plugins: [htmlPlugin,cleanWebpackPlugin],
    devServer: {
        static: "./src",
        open: true,
        host: '127.0.0.1',
        port: 80,
    },
    module: {
        rules: [
            {test: /\.css$/,use: ['style-loader', 'css-loader']},
            {test: /\.less$/,use: ['style-loader', 'css-loader', 'less-loader']},
            {
                test: /\.jpg|png|gif$/,
                // use: {
                //   loader: 'url-loader',
                //   options: {
                //     limit: 22228,
                //     outputPath: 'image',
                //   },
                // },//webpack5之后取消
                type:'asset'
              },
        ]
    }
}
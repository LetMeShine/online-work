// let CompressionWebpackPlugin = require("compression-webpack-plugin")

module.exports = {
    // publicPath: './',
    // 打包到子域下面  http://www.baidu.com/sub
    publicPath: '/vue3TS/',
    outputDir: "dist/vue3TS",      //输出目录
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    //配置webpack
    configureWebpack: {
        module: {
            // 解决引入UI组件报错问题
            rules: [{
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            }]
        }
    }
}
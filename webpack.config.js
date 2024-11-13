const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode: 'development',

    entry: {
        main: path.resolve('./src/app.js')
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024
                    }
                }
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin({
            banner: `마지막 빌드시간: ${new Date().toLocaleString()} 입니다.`
        })
    ]
}

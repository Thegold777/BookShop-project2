const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname,"./index.js"),
    output:{
        path:path.resolve(__dirname, 'output') ,
        filename: 'main.js'
    },
    mode:'production',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            { test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'] }
        ]
    },
    optimization: {
        minimizer: [
            // Следующая строка нужна для того, чтобы настройки optimization.minimizer добавились к настройкам по умолчанию, а не переписывали их
            `...`,
            new CssMinimizerPlugin(),
        ],
    },

}
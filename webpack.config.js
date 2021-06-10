const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MimiCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/api2.js'),
        mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), 
            filename: 'index.html', 
        }),

        new CleanWebpackPlugin(),
        new MimiCssExtractPlugin({
            filename: '[name].[contenthash].css'
          }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, './public/icons/icon.png'),
        to: path.resolve(__dirname, 'dist')
      }]
    }),
    
        // new MimiCssExtractPlugin({
        //     filename: '[name].[contenthash].css'
        //   }),
        //   new webpack.DefinePlugin({
        //     "process.env": dotenv.parsed
        //   }),
 
    ],
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
             // шрифты и SVG
             {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },

output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
},

}
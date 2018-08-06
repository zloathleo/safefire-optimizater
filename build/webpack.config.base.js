'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const utils = require('./utils')

module.exports = {
  entry: {
    index: utils.resolve('src/index.js'),
  },

  output: {
    path: utils.resolve('public'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
    }
  },

  optimization: {
    runtimeChunk: true,

    splitChunks: {
      cacheGroups: {
        vendor: { // 将第三方模块提取出来
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10, // 优先
          enforce: true
        }
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/, // 排除不处理的目录
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除不处理的目录
        use: {
          loader: 'babel-loader',
          options: {
            compact: 'false'
          }
        }
      },
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, "css-loader", {
          loader: "postcss-loader",
          options: {
            plugins: () => [require('autoprefixer')]
          }
        }]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'] // 编译顺序从右往左
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      }
    ]
  },

  plugins: [

    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    
    new HtmlWebpackPlugin({
      template: utils.resolve('src/assets/ejs/index.ejs'),
      filename: utils.resolve('public/index.html'),
      hash: true,
      inject: true
    }),
    new VueLoaderPlugin(), 

    // new CopyWebpackPlugin([{
    //   from: utils.resolve('assets/img'),
    //   to: utils.resolve('dist/static/img'),
    //   toType: 'dir'
    // }])
  ]
}

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
//抽离css
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: './src/script/app.js',

  output: {
    path: __dirname + '/build',
    filename: 'app.js'
  },

  devServer: {
    contentBase: './build',
    host: 'localhost',
    port: 8000,
    historyApiFallback: false,
   proxy: {
	    '/api': {
			target: 'http://m.api.haoshiqi.net/',
			pathRewrite: {'^/api': ''},
			changeOrigin: true
	    }
	}
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html',
      title: '好食期'
    }),
    new ExtractTextPlugin({
      // filename: 'app_[hash].css',
      filename: 'app.css',
      disable: false,
      allChunks: true
    }),
  ],
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter',
    'redux': 'window.Redux',
    'react-redux': 'window.ReactRedux'
  }
}

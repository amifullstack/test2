const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'react-hot-loader/babel',
    'webpack-hot-middleware/client',
    './index.js',
  ],
  output: {
    filename: 'javascripts/build.js',
    path: '/',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        })
        // loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      // {
      //   test: /\.obj$/,
      //   loader: [ 'webpack-obj-loader']
      // },
      {
        test: /\.(png)$/,
        loader:['url-loader']
      },
      
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),    
    new ExtractTextPlugin('stylesheets/style.css'),
  ],
};

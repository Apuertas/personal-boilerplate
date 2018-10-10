const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const webpack = require('webpack');


// Webpack configuration
module.exports = merge(common, {
  entry: [
    'react-hot-loader/patch',
    path.join(path.resolve(__dirname, '../src'), 'client.jsx'),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, '../dist'),
  SRC: path.resolve(__dirname, '../src'),
};

// Webpack configuration
module.exports = {
  output: {
    path: paths.DIST,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: ['eslint-loader'], enforce: 'pre', exclude: /node_modules/ },
      { test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]',
              },
            },
          ],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new ExtractTextPlugin('style.css'),
  ],
};

const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// Webpack configuration
module.exports = merge(common, {
  entry: [
    path.join(path.resolve(__dirname, '../src'), 'client.jsx'),
  ],
});

const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    fallback: {
      path: require.resolve('path-browserify'),
      zlib: require.resolve('browserify-zlib'),
      util: require.resolve('util/'),
      assert: require.resolve('assert/'),
      buffer: require.resolve('buffer'),
      stream: require.resolve('stream-browserify'),
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    })
  ],
  target: 'electron-renderer',
  module: {
    rules: require('./rules.webpack'),
  },
}

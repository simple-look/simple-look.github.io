const webpack = require('webpack');

module.exports = {
  entry: './src/main',

  output: {
    filename: 'simple-look.js',
    path: '.',
  },

  resolve: {
    extensions: ['', '.ts', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel!ts',
      },
      {
        test: /\.jade$/,
        loader: 'html!jade-html',
      },
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.styl$/,
        loader: 'raw!stylus',
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};

const path = require('path');
const webpack = require('webpack');
const bowerResolver = new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main']));

module.exports = {
  context: path.resolve('bower_components'),
  entry: {
    EaselJS: 'EaselJS',
    TweenJS: 'TweenJS',
    PreloadJS: 'PreloadJS',
    SoundJS: 'SoundJS'
  },
  output: {
    path: path.resolve('__mocks__'),
    filename: '[name].js'
  },
  plugins: [
    bowerResolver
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel-loader',
      },
      {
        test: /bower_components(\/|\\)(PreloadJS|SoundJS|EaselJS|TweenJS)(\/|\\).*\.js$/,
        loader: 'imports?this=>window!exports?window.createjs',
      },
    ]
  },
  resolve: {
    extensions: ['', '.css', '.scss', '.html', '.js'],
    modulesDirectories: ['node_modules', 'bower_components'],
  }
}

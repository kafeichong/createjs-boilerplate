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
        test: /bower_components(\/|\\)(PreloadJS|SoundJS|EaselJS|TweenJS)(\/|\\).*\.js$/,
        loader: 'imports?this=>window!exports?window.createjs',
      },
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['bower_components'],
  }
}

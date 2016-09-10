module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: [{
        }, 'es2015', 'react']
      }
    }]
  },
  devServer: {
    port: 4000
  }
};

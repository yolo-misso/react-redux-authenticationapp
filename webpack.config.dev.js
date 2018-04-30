import path from 'path'
//const path = require('path');

export default{
  devtool: "eval-source-map",
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    //filename: 'bundle.js',
    path: '/'
  },
  module:{
    rules:[{
      test: /\.js$/,
      include: path.join(__dirname, 'client'),
      loaders: 'babel-loader'
    }]
  },
  resolve: {
    //extensions: ['','.js']
    extensions: ['.js']
  }
}
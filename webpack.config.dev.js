import path from 'path'
//const path = require('path');

export default{
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: '/'
  },
  module:{
    loaders:[{
      test: /\.js$/,
      include: path.join(__dirname, 'client'),
      loaders: 'babel-loader'
    }]
  },
  resolve: {
    extentions: ['','.js']
  }
}
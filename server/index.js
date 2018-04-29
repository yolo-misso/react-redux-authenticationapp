/*const express = require("express");
const path = require('path');
const webpack = require('webpack')
const webpackMiddleware = require ('webpack-dev-middleware')
const webpackConfig = require ('../webpack.config.dev')*/
import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, ()=>console.log('Running on location:3000'));



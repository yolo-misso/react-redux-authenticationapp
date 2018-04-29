//const express = require("express");
//const path = require('path');

import express from 'express';
import path from 'path';

let app = express();

app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, ()=>console.log('Running on location:3000'));



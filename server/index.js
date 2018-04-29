const express = require("express");

let app = express();

app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, ()=>console.log('Running on location:3000'));



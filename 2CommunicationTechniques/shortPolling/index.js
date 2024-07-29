const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(4040, () => {
  console.log("server is running @ 4040");
});
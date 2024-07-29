const express = require('express');
const app = express();

let data = "initial data";
const waitingClients = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get("/getData", (req, res) => {
  if(data !== req.query.lastData) {
    res.json({data})
  } else {
    waitingClients.push(res);
  }
});

// update put/post
app.get('/updateData', (req, res) => {
  data = req.query.data;

  while(waitingClients.length > 0) {
    const client = waitingClients.pop();
    client.json({data});
  }

  res.send({ success: 'Data updated successfully'})
});

app.listen(5011, () => {
  console.log("server is running at port 5011")
});